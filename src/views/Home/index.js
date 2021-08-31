/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Field from './Field'
import Pokemon from './Pokemon'
import { NetworkStatus, useQuery } from "@apollo/client"
import SplashScreen from '../SplashScreen'
import { store } from '../../store/store'
import { SET_CONTAINER_SCROLL_ELEMENT } from '../../store/actionTypes'
import { POKEMON_LIST } from '../../graphql/queries'
import LoadingSpinner from '../../components/LoadingSpinner'
import { LeftArrow, RightArrow } from '../../assets/icons'
import theme from '../../styles/theme'
import useWindowSize from '../../hooks/useWindowSize'

const limit = 20

const cssButtonScroll = css`
  position: fixed;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.dark};
  opacity: 0.4;
`

const Home = () => {
  const containerRef = useRef()
  const { state: { scroll: { position } }, dispatch } = useContext(store)
  const [isLeftEnd, setIsLeftEnd] = useState(true)
  const [isRightEnd, setIsRightEnd] = useState(false)
  const { width } = useWindowSize()

  const {
    fetchMore,
    loading,
    networkStatus,
    data: { pokemons: { results: items = [], next } = {} } = {}
  } = useQuery(POKEMON_LIST, {
    variables: { limit, offset: 0 },
    notifyOnNetworkStatusChange: true
  })

  // bagi 4 pokemon untuk setiap field nya'
  const renderFieldByFourPokemon = useMemo(() => {
    let result = []
    let pokemons = []
    items.forEach((el, i) => {
      pokemons.push((
        <Pokemon
          key={el.name}
          image={el.image}
          name={el.name}
        />
      ))
      if ((i + 1) % 4 === 0 || i === items.length - 1) {
        result.push((
          <Field key={`field-${Math.ceil((i + 1) / 4)}`}>
            {pokemons}
          </Field>
        ))
        pokemons = []
      }
    })
    return result
  }, [items])

  // scroll to saved position
  useLayoutEffect(() => {
    containerRef.current?.scrollTo(position, 0)
  }, [position])

  // set container as a scroll element
  useEffect(() => {
    dispatch({ type: SET_CONTAINER_SCROLL_ELEMENT, payload: containerRef })
  }, [dispatch])

  const handleContainerScroll = ({ target }) => {
    const scrollLeftMax = target.scrollWidth - target.clientWidth

    // detecting position
    if (target.scrollLeft === 0) setIsLeftEnd(true)
    else setIsLeftEnd(false)
    if (target.scrollLeft >= scrollLeftMax) setIsRightEnd(true)
    else setIsRightEnd(false)

    // infinite scroll
    if (loading || !next) return
    // if scrolled more than 99% of container width then fetchmore
    if (target.scrollLeft / scrollLeftMax >= 0.99) fetchMore({
      variables: {
        offset: items.length
      }
    })
  }

  const scrollByButton = (direction) => (e) => {
    containerRef.current?.scrollTo({
      top: 0,
      left: containerRef.current.scrollLeft + (direction === 'left' ? width * -1 : width),
      behavior: 'smooth'
    })
  }

  if (loading && networkStatus !== NetworkStatus.fetchMore) return <SplashScreen />

  return (
    <div
      ref={containerRef}
      css={css`
        min-height: 100vh;
        overflow-y: hidden;
        display: flex;
        position: relative;
      `}
      onScroll={handleContainerScroll}
    >
      {renderFieldByFourPokemon}

      {
        !isLeftEnd &&
        <button aria-label="scroll left" css={[cssButtonScroll, { left: '1.6rem' }]} onClick={scrollByButton('left')}>
          <LeftArrow height={60} width="auto" />
        </button>
      }

      {
        (!isRightEnd || next) &&
        <button aria-label="scroll right" css={[cssButtonScroll, { right: '1.6rem' }]} onClick={scrollByButton('right')}>
          <RightArrow height={60} width="auto" />
        </button>
      }

      {
        (loading && networkStatus === NetworkStatus.fetchMore) &&
        <LoadingSpinner
          color="white"
          size={60}
          css={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: (containerRef.current?.scrollWidth ?? 0) - 120
          }}
        />
      }
    </div>
  )
}

export default Home
