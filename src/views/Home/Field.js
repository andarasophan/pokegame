/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { toAbsoluteUrl } from '../../utils/helpers/assetHelpers'

const Field = ({ children }) => {
  const theme = useTheme()
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
        background-color: ${theme.colors.gray};
      `}
    >
      {children}
    </div>
  )
}

export default Field
