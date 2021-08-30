/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Button from '../../../components/Button'
import Content from './Content'

export const detailButtonWidth = '4.5rem'

const DetailCard = ({
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
          <div css={css`transform: rotate(90deg);`}>Leave</div>
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
          <div css={css`transform: rotate(90deg);`}>{show && !fixed ? 'Hide' : 'Detail'}</div>
        </Button>
      </div>

      {/* content */}
      <Content pokemon={pokemon} />
    </div>
  )
}

export default DetailCard
