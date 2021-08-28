/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { cssPixelBorder } from '../styles/styles'
import Button from './Button'
import PokemonImage from './PokemonImage'

const cssPokemon = css`
  width: 25rem;
  height: 25rem;
  position: relative;
  &:not(:last-child) {
    margin-right: 12rem;
  }
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
  const cardModalRef = useRef()
  const [showModal, setShowModal] = useState(false)
  const theme = useTheme()

  // listen event click -> if click outside cardModal, close cardModal
  useEffect(() => {
    const closeOnClickOutside = (e) => {
      const div = cardModalRef.current;
      if (div && !div.contains(e.target)) setShowModal(false)
    }
    if (showModal) document.addEventListener('click', closeOnClickOutside);
    else document.removeEventListener('click', closeOnClickOutside);
    return () => {
      if (showModal) document.removeEventListener('click', closeOnClickOutside);
    };
  }, [showModal]);

  return (
    <button css={cssPokemon} onClick={() => setShowModal(true)}>
      <PokemonImage image={image} name={name} />

      <div
        ref={cardModalRef}
        css={[
          cssCardModal(theme),
          { transform: showModal ? 'scale(1)' : 'scale(0)' }
        ]}
      >
        <h5>{name}</h5>
        <p>Owned: {owned ?? '0'}</p>
        <Button variant="primary" href="/detail">Catch</Button>
      </div>
    </button>
  )
}

export default Pokemon
