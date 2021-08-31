/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Header from './Header'
import { cssPixelBorder } from '../../styles/styles'
import PokemonList from './PokemonList'
import { modalPadding } from '../../components/Modal'
import { useState } from 'react'

const MyBag = () => {
  const theme = useTheme()
  const [search, setSearch] = useState('')


  return (
    <div css={css`
      background: ${theme.colors.secondary};
      height: 100vh;
      padding: 1rem;
    `}>
      <div
        css={css`
          margin: auto;
          height: calc(100vh - 2 * ${modalPadding});
          max-width: 700px;
          background-color: ${theme.colors.white};
          ${cssPixelBorder(theme.colors.gray)};
        `}
      >
        {/* header */}
        <Header
          inputValue={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />

        {/* pokemonlist */}
        <PokemonList search={search} />
      </div>
    </div>
  )
}

export default MyBag
