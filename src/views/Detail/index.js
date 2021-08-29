/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { useCallback, useState } from 'react'
import Button from '../../components/Button'
import PokemonImage from '../../components/PokemonImage'
import Grass from './Grass'
import HitEffect from './HitEffect'
import Pokeball from './Pokeball'
import pokemon from './dummyData.json'

const ballAnimation = 500
const hitEffectAnimation = 100

const Detail = () => {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)

  const [moveBall, setMoveBall] = useState(false)
  const [hideBall, setHideBall] = useState(false)
  const [hitEffect, setHitEffect] = useState(false)
  const [hideHitEffect, setHideHitEffect] = useState(false)
  const [hidePokemon, setHidePokemon] = useState(false)
  const [rotateBall, setRotateBall] = useState(false)

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

  const throwBall = () => {
    if (loading) return
    setLoading(true)
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
                      console.log('failed')
                      //reset
                      reset()
                      setLoading(false)
                    })
                } else { // success
                  console.log('success')
                  //reset
                  reset()
                  setLoading(false)
                }
              }, ballAnimation);
            }, ballAnimation);
          }, ballAnimation);
        }, ballAnimation);
      }, hitEffectAnimation);
    }, ballAnimation);
  }

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
          name='Charmeleon'
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
        loading={loading}
      >
        Throw Ball
      </Button>
    </div>
  )
}

export default Detail
