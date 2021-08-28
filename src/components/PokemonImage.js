/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const cssPokemonImage = css`
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
`

const PokemonImage = ({
  image,
  name,
  className
}) => (
  <img
    className={className}
    css={cssPokemonImage}
    src={image}
    alt={name}
  />
)

export default PokemonImage
