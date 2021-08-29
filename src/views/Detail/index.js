/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import PokemonImage from '../../components/PokemonImage'
import Grass from './Grass'
import pokemon from './dummyData.json'

const Detail = () => {
  const theme = useTheme()

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
          }}
          image={pokemon.sprites.front_default}
          name='Charmeleon'
        />
        <Grass />
      </div>
    </div>
  )
}

export default Detail
