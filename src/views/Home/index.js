/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext, useEffect, useMemo, useRef } from 'react'
import Field from './Field'
import Pokemon from './Pokemon'
import { gql, useQuery } from "@apollo/client"
import SplashScreen from '../SplashScreen'
import { store } from '../../store/store'
import { SET_CONTAINER_SCROLL_ELEMENT } from '../../store/actionTypes'

const POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      next
      results {
        name
        image
      }
    }
  }
`
const limit = 20
const offset = 0

const Home = () => {
  const containerRef = useRef()
  const { state: { scroll: { position } }, dispatch } = useContext(store)

  const { loading, data: { pokemons: { results: items = [] } = {} } = {} } = useQuery(POKEMON_LIST, {
    variables: { limit, offset },
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
  useEffect(() => {
    containerRef.current?.scrollTo(position, 0)
  }, [position])

  // set container element
  useEffect(() => {
    dispatch({ type: SET_CONTAINER_SCROLL_ELEMENT, payload: containerRef })
  }, [dispatch])

  if (loading) return <SplashScreen />

  return (
    <div
      ref={containerRef}
      css={css`
        min-height: 100vh;
        overflow-y: hidden;
        display: flex;
      `}
    >
      {renderFieldByFourPokemon}
    </div>
  );
}

export default Home
