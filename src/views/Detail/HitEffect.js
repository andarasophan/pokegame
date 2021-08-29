/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { toAbsoluteUrl } from '../../utils/helpers/assetHelpers'

const HitEffect = ({
  show,
  playAnimation,
  animationDuration
}) => {
  return (
    <img
      style={{
        transform: playAnimation ? 'scale(0.6)' : 'scale(0)',
        opacity: show ? 1 : 0,
        transition: playAnimation ? `transform ${animationDuration}ms ease-in-out` : 'none'
      }}
      css={css`
        z-index: 2;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
      `}
      src={toAbsoluteUrl('/assets/hit_effect.png')}
      alt="Effect"
    />
  )
}

export default HitEffect
