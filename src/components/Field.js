/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { toAbsoluteUrl } from '../utils/helpers/assetHelpers'

const Field = ({ children }) => {
  return (
    <div
      css={css`
        background-repeat: no-repeat;
        background-position: left bottom;
        display: flex;
        padding: 10rem 6rem;
        align-items: flex-end;
        background-image: url(${toAbsoluteUrl('/assets/background.jpg')});
        image-rendering: pixelated;
        image-rendering: crisp-edges;
      `}
    >
      {children}
    </div>
  )
}

export default Field
