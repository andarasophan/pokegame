/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { cssPixelBorder } from '../styles/styles'
import Button from './Button'
import PokemonImage from './PokemonImage'

const cssPokemon = css`
  width: 25rem;
  height: 25rem;
`

const cssCardModal = (theme) => css`
  position: absolute;
  width: 100%;
  top: -10rem;
  left: 0;
  z-index: 1;
  cursor: auto;
  text-align: left;
  padding: 2rem;
  background-color: ${theme.colors.white};
  ${cssPixelBorder(theme.colors.white)};
  transition: transform 250ms ease-in-out;

  h5 {
    font-size: 1.4rem;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  p {
    color: ${theme.colors.gray};
  }
  a {
    width: 100%;
    margin-top: 2rem;
  }
`
const Pokemon = ({
  image,
  name,
  owned
}) => {
  const pokemonRef = useRef()
  const [showModal, setShowModal] = useState(false)
  const theme = useTheme()

  // listen event click -> if click outside pokemon, close cardModal
  useEffect(() => {
    const closeOnClickOutside = (e) => {
      const div = pokemonRef.current
      if (div && !div.contains(e.target)) setShowModal(false)
    }
    document.addEventListener('click', closeOnClickOutside)
    return () => document.removeEventListener('click', closeOnClickOutside)
  }, [])

  return (
    <div
      ref={pokemonRef}
      css={css`
        position: relative;
        &:not(:last-child) {
          margin-right: 12rem;
        }
      `}
    >
      <button css={cssPokemon} onClick={() => setShowModal(true)}>
        <PokemonImage image={image} name={name} />
      </button>

      <div
        css={[
          cssCardModal(theme),
          { transform: showModal ? 'scale(1)' : 'scale(0)' }
        ]}
      >
        <h5>{name}</h5>
        <p>Owned: {owned ?? '0'}</p>
        <Button variant="primary" href="/detail">Catch</Button>
      </div>
    </div>
  )
}

export default Pokemon
