/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { useCallback, useContext, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import { toast } from 'react-toastify'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import PokemonImage from '../../components/templates/PokemonImage'
import Grass from './Grass'
import HitEffect from './HitEffect'
import Pokeball from './Pokeball'
import SuccessForm from './SuccessForm'
import useWindowSize from '../../hooks/useWindowSize'
import { store } from '../../store/store'
import { ADD_POKEMON } from '../../store/actionTypes'
import { useQuery } from "@apollo/client"
import SplashScreen from '../SplashScreen'
import DetailCard from './DetailCard'
import { POKEMON_DETAIL } from '../../graphql/queries'

const ballAnimation = 500
const hitEffectAnimation = 100

const Detail = () => {
  const { params: { name } } = useRouteMatch()

  const { loading, data: { pokemon } = {} } = useQuery(POKEMON_DETAIL, {
    variables: { pokemonName: name },
  })

  const theme = useTheme()
  const { push } = useHistory()
  const { dispatch } = useContext(store)
  const [catching, setCatching] = useState(false)

  const [moveBall, setMoveBall] = useState(false)
  const [hideBall, setHideBall] = useState(false)
  const [hitEffect, setHitEffect] = useState(false)
  const [hideHitEffect, setHideHitEffect] = useState(false)
  const [hidePokemon, setHidePokemon] = useState(false)
  const [rotateBall, setRotateBall] = useState(false)

  const [successModal, setSuccessModal] = useState(false)
  const [showStatus, setShowStatus] = useState(false)

  const { width } = useWindowSize()

  const reset = () => {
    setMoveBall(false)
    setHideBall(false)
    setHitEffect(false)
    setHideHitEffect(false)
    setHidePokemon(false)
    setRotateBall(false)
  }

  const releasePokemon = useCallback(() => {
    return new Promise((resolve) => {
      // hit animation
      setHitEffect(true)
      setTimeout(() => {
        // hide ball and hit effect
        setHideHitEffect(true)
        setHideBall(true)
        //show Pokemon
        setHidePokemon(false)
        resolve()
      }, hitEffectAnimation);
    })
  }, [])

  const discardPokemon = () => {
    setSuccessModal(false)
    releasePokemon()
      .then(() => {
        toast('Pokemon Released..')
        //reset
        reset()
        setCatching(false)
      })
  }

  const handleSubmit = ({ nickname }) => {
    const data = {
      ...pokemon,
      nickname
    }
    dispatch({ type: ADD_POKEMON, payload: data })
    toast('Yeay pokemon added!')
    // redirect to home
    push('/')
  }

  const throwBall = () => {
    if (catching) return
    setCatching(true)
    // move ball animation
    setMoveBall(true)
    setTimeout(() => {
      //hide ball
      setHideBall(true)
      // hit animation
      setHitEffect(true)
      setTimeout(() => {
        // hide pokemon and hit effect
        setHideHitEffect(true)
        setHitEffect(false)
        setHideHitEffect(false)
        setHidePokemon(true)
        // rotate ball animation
        setHideBall(false)
        setRotateBall(true)
        setTimeout(() => {
          setRotateBall(false)
          setTimeout(() => {
            setRotateBall(true)
            setTimeout(() => {
              setRotateBall(false)
              setTimeout(() => {
                // generate success or failed
                const prob = Math.random();
                if (prob < 1 / 2) { // failed
                  releasePokemon()
                    .then(() => {
                      toast('Pokemon Broke Free!')
                      //reset
                      reset()
                      setCatching(false)
                    })
                } else { // success
                  setSuccessModal(true)
                }
              }, ballAnimation);
            }, ballAnimation);
          }, ballAnimation);
        }, ballAnimation);
      }, hitEffectAnimation);
    }, ballAnimation);
  }

  if (loading) return <SplashScreen />

  return (
    <div css={css`
      min-height: 100vh;
      background-color: ${theme.colors.gray};
      padding: 10rem 0;
      overflow: hidden;
    `}>
      <div css={css`
        margin: auto;
        position: relative;
        width: 25rem;
        height: 25rem;
      `}
      >
        <PokemonImage
          css={{
            position: 'absolute',
            zIndex: 1,
            opacity: hidePokemon ? 0 : 1
          }}
          image={pokemon.sprites.front_default}
        />
        <Grass />
        <HitEffect
          animationDuration={hitEffectAnimation}
          playAnimation={hitEffect}
          show={!hideHitEffect}
        />
        <Pokeball
          animationDuration={ballAnimation}
          rotate={rotateBall}
          move={moveBall}
          show={!hideBall}
        />
      </div>

      <Button
        variant="primary"
        css={css`
          position: fixed;
          z-index: 1;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        `}
        onClick={throwBall}
        loading={catching}
      >
        Throw Ball
      </Button>

      <Modal open={successModal}>
        <SuccessForm
          onSubmit={handleSubmit}
          onCancel={discardPokemon}
        />
      </Modal>

      <DetailCard
        fixed={width > theme.bp.xl}
        show={showStatus}
        onToggle={() => setShowStatus(prev => !prev)}
        pokemon={pokemon}
      />
    </div>
  )
}

export default Detail
