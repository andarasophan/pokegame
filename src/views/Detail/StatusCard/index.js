/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Button from '../../../components/Button'
import { cssPixelBorder } from '../../../styles/styles'
import { mq } from '../../../utils/helpers/mediaQueryHelper'
import Moves from './Moves'
import PokemonInfo from './PokemonInfo'

const detailButtonWidth = '4.5rem'

const StatusCard = ({
  show,
  onToggle,
  pokemon,
  fixed
}) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        position: fixed;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        max-height: calc(100vh - 8rem);
        margin: auto;
        transition: transform 250ms ease-in-out;
        transform: ${show || fixed ? 'translateX(0)' : 'translateX(-100%)'};
      `}
    >
      <div css={css`
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;
        max-height: 360px;
        display: flex;
        flex-direction: column;
      `}>
        <Button
          href="/"
          variant="white"
          css={css`
          flex: 1;
          width: ${detailButtonWidth};
          color: ${theme.colors.primary};
        `}
        >
          <div css={css`transform: rotate(90deg);`}>Run</div>
        </Button>
        <Button
          disabled={fixed}
          onClick={onToggle}
          variant={show && !fixed ? 'danger' : "dark"}
          css={css`
            flex: 1;
            width: ${detailButtonWidth};
          `}
        >
          <div css={css`transform: rotate(90deg);`}>{show && !fixed ? 'Hide' : 'Stats'}</div>
        </Button>
      </div>
      <div
        css={css`
          height: 100%;
          background-color: ${theme.colors.white};
          ${cssPixelBorder(theme.colors.white)}
          max-width: calc(100vw - ${detailButtonWidth});
          padding: 1.6rem 0;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 0 1.6rem;
            overflow-y: auto;
            overflow-x: hidden;
            width: 200px;
            ${mq('sm')} {
              width: 400px;
            }
          `}
        >
          <PokemonInfo pokemon={pokemon} />

          <Moves moves={pokemon.moves} />
        </div>

      </div>
    </div>
  )
}

export default StatusCard
