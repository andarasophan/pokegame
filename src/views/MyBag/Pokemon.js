/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react"
import { useContext, useState } from "react"
import Button from "../../components/Button"
import Modal, { cardModalPadding, modalPadding } from "../../components/Modal"
import MovesInfo from "../../components/templates/MovesInfo"
import PokemonImage from "../../components/templates/PokemonImage"
import StatusInfo from "../../components/templates/StatusInfo"
import TypesInfo from "../../components/templates/TypesInfo"
import { REMOVE_POKEMON } from "../../store/actionTypes"
import { store } from "../../store/store"
import { pixelBorderWidth } from "../../styles/styles"
import { mq } from "../../utils/helpers/mediaQueryHelper"

const headerCardHeight = '60px'

const cssPokemon = theme => css`
  width: 100%;
  text-align: center;
  padding: 1.2rem 0;
  word-break: break-all;
  img {
    height: auto;
    width: 100%;
  }
  h4 {
    font-size: 1.4rem;
    margin-bottom: 4px;
  }
  p {
    font-size: 1.2rem;
    color: ${theme.colors.gray};
    text-transform: uppercase;
  }
`

const Pokemon = ({ pokemon }) => {
  const theme = useTheme()
  const [showDetail, setShowDetail] = useState(false)
  const { dispatch } = useContext(store)

  const releasePokemon = () => {
    dispatch({ type: REMOVE_POKEMON, payload: pokemon.nickname })
  }

  return (
    <div>
      <button
        onClick={() => setShowDetail(true)}
        css={cssPokemon(theme)}
      >
        <PokemonImage
          image={pokemon.sprites.front_default}
        />
        <h4>{pokemon.nickname}</h4>
        <p>{pokemon.name}</p>
      </button>
      <Modal
        open={showDetail}
        onClose={() => setShowDetail(false)}
      >
        <div css={{
          paddingBottom: cardModalPadding,
          height: headerCardHeight,
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: cardModalPadding
        }}>
          <Button onClick={() => setShowDetail(false)} variant="gray">Close</Button>
        </div>
        <div css={css`
          padding: 0 1.6rem;
          width: calc(100vw - 2 * 1.6rem - 2 * ${modalPadding} - 2 * ${pixelBorderWidth});
          max-width: 600px;
          max-height: calc(100vh - 2 * ${cardModalPadding} - 2 * ${modalPadding} - 2 * ${pixelBorderWidth} - ${headerCardHeight});
          overflow: auto;
          display: flex;
          flex-wrap: wrap;
        `}>

          <div css={css`
            padding: 0 1.6rem;
            width: 100%;
            
            ${mq('sm')} {
              width: 50%;
            }
          `}>
            <PokemonImage
              image={pokemon.sprites.front_default}
              css={css`
                margin-bottom: 1.6rem;
                width: 100%;
                height: auto;
              `}
            />
            <div css={{ marginBottom: '1.6rem' }}>
              <h2>{pokemon.nickname}</h2>
              <h3 css={{ color: theme.colors.gray, textTransform: 'uppercase' }}>{pokemon.name}</h3>
            </div>

            <div css={{ marginBottom: '1.6rem' }}>
              <Button href={`/detail/${pokemon.name}`} css={{ display: 'inline-block', marginBottom: '.8rem' }} variant="primary">Catch More</Button>
              <Button onClick={releasePokemon} variant="danger">Release</Button>
            </div>

            <TypesInfo css={{ marginBottom: '1.6rem' }} types={pokemon.types} />
            <StatusInfo css={{ marginBottom: '1.6rem' }} stats={pokemon.stats} />
          </div>

          <div css={css`
            padding: 0 1.6rem;
            width: 100%;
            
            ${mq('sm')} {
              width: 50%;
            }
          `}>
            <MovesInfo moves={pokemon.moves} />
          </div>
        </div>

      </Modal>
    </div>
  )
}

export default Pokemon
