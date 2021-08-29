/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { memo, useContext, useMemo } from 'react'
import PokemonImage from '../../../components/PokemonImage'
import { store } from '../../../store/store'
import StatusEnum from '../../../utils/enums/statusEnum'
import { mq } from '../../../utils/helpers/mediaQueryHelper'

const PokemonInfo = memo(({ pokemon }) => {
  const theme = useTheme()
  const { state: { user: { pokemons: myPokemons = [] } = {} } = {} } = useContext(store)

  const totalOwned = useMemo(() => myPokemons.filter(el => el.id === pokemon.id).length, [myPokemons, pokemon])

  return (
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
        image={pokemon.sprites.front_default}
        name='Charmeleon'
      />

      <div
        css={css`
          width: 100%;
          ${mq('sm')} {
            width: 50%;
          }
        `}
      >
        <h3 css={{ textTransform: 'uppercase' }}>{pokemon.name}</h3>
        <div css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.6rem;
          color: ${theme.colors.success};
          font-size: 1.2rem;
        `}>
          <p>OWNED</p>
          <p>{totalOwned}</p>
        </div>

        <div css={{ marginBottom: 16 }}>
          {
            pokemon.stats.map(el => (
              <div
                key={el.stat.name}
                css={css`
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <p css={{ textTransform: 'uppercase' }}>{StatusEnum.getAbr(el.stat.name)}</p>
                <p>{el.base_stat}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
})

export default PokemonInfo
