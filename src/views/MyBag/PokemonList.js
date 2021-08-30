/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext, useMemo } from 'react'
import { headerHeight } from './Header'
import { store } from '../../store/store'
import { mq } from '../../utils/helpers/mediaQueryHelper'
import { modalPadding } from '../../components/Modal'
import { pixelBorderWidth } from '../../styles/styles'
import Pokemon from './Pokemon'
import theme from '../../styles/theme'
import { filter } from '../../utils/helpers/filterHelper'

const cssContainer = css`
  max-height: calc(100vh - ${headerHeight} - 2 * ${modalPadding} - 2 * ${pixelBorderWidth});
  padding: 0 2.4rem;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  ${mq('sm')} {
    grid-template-columns: repeat(3, 1fr);
  }
`
const column = ['name', 'nickname']

const PokemonList = ({ search }) => {
  const { state: { user: { pokemons: myPokemons = [] } = {} } } = useContext(store)
  const filteredPokemons = useMemo(() => search ? filter(myPokemons, search, column) : myPokemons, [myPokemons, search])

  if (!myPokemons.length) return (
    <EmptyView>Empty</EmptyView>
  )
  else if (!filteredPokemons.length) return (
    <EmptyView>Nothing found</EmptyView>
  )

  return (
    <div css={cssContainer}>
      {
        filteredPokemons.map(el => (
          <Pokemon
            key={el.nickname}
            pokemon={el}
          />
        ))
      }
    </div>
  )
}

const EmptyView = ({ children }) => (
  <div css={{ color: theme.colors.gray, padding: '10rem', textAlign: 'center' }}>
    <p>{children}</p>
  </div>
)

export default PokemonList
