/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { useContext, useMemo } from 'react'
import { detailButtonWidth } from '.'
import PokemonImage from '../../../components/templates/PokemonImage'
import MovesInfo from '../../../components/templates/MovesInfo'
import PokemonInfo from '../../../components/templates/PokemonInfo'
import StatusInfo from '../../../components/templates/StatusInfo'
import TypesInfo from '../../../components/templates/TypesInfo'
import { store } from '../../../store/store'
import { cssPixelBorder } from '../../../styles/styles'
import { mq } from '../../../utils/helpers/mediaQueryHelper'

const Content = ({
  pokemon
}) => {
  const theme = useTheme()
  const { state: { user: { pokemons: myPokemons = [] } = {} } } = useContext(store)
  const totalOwned = useMemo(() => myPokemons.filter(el => el.name === pokemon.name).length, [myPokemons, pokemon])

  return (
    <div
      css={css`
        height: 100%;
        background-color: ${theme.colors.white};
        ${cssPixelBorder(theme.colors.white)}
        padding: 1.6rem 0;
      `}
    >
      <div
        css={css`
          max-width: calc(100vw - ${detailButtonWidth});
          height: 100%;
          padding: 0 1.6rem;
          overflow: auto;
          width: 250px;
          ${mq('sm')} {
            width: 400px;
          }
        `}
      >
        <div css={css`
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        `}>
          <PokemonImage
            css={css`
              width: 100%;
              margin-bottom: 1.6rem;
              ${mq('sm')} {
                width: 50%;
              }
            `}
            image={pokemon?.sprites.front_default}
          />
          <div
            css={css`
              width: 100%;
              ${mq('sm')} {
                width: 50%;
              }
            `}
          >
            <PokemonInfo
              css={{ marginBottom: '1.6rem' }}
              owned={totalOwned}
              name={pokemon?.name}
            />
            {/* types tag  */}
            <TypesInfo
              css={{ marginBottom: '1.6rem' }}
              types={pokemon?.types}
            />
            {/* status info */}
            <StatusInfo
              css={{ marginBottom: '1.6rem' }}
              stats={pokemon?.stats}
            />
          </div>
        </div>

        {/* movesInfo */}
        <MovesInfo moves={pokemon?.moves} />
      </div>
    </div>
  )
}

export default Content
