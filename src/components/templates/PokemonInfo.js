/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const PokemonInfo = ({ name, owned, className }) => {
  const theme = useTheme()
  return (
    <div className={className}>
      <h3 css={{ textTransform: 'uppercase' }}>{name}</h3>
      <div css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.6rem;
        color: ${theme.colors.success};
        font-size: 1.2rem;
      `}>
        <p>OWNED</p>
        <p>{owned}</p>
      </div>
    </div>
  )
}

export default PokemonInfo
