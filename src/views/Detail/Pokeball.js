/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { toAbsoluteUrl } from '../../utils/helpers/assetHelpers'

const Pokeball = ({
  rotate,
  move,
  animationDuration,
  show
}) => {
  return (
    <div
      css={css`
        position: absolute;
        z-index: 1;
        left: 50%;
        bottom: 5rem;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
      `}
      style={{
        transform: rotate ? 'translateX(-50%) rotate(10deg)'
          : move ? 'translateX(-50%)'
            : 'translateX(-50%) translateY(100vh)',
        opacity: show ? 1 : 0,
        transition: move || rotate ? `transform ${animationDuration}ms cubic-bezier(0,.62,0,1.39)` : 'none'
      }}
    >
      <img
        style={{
          transform: move ? 'rotate(45deg)' : 'none',
          transition: move ? `transform ${animationDuration}ms ease-in-out` : 'none'
        }}
        css={css`
        width: 50px;
      `}
        src={toAbsoluteUrl('/assets/pokeball.png')}
        alt="Pokeball"
      />
    </div>
  )
}

export default Pokeball
