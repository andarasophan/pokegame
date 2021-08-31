/** @jsxImportSource @emotion/react */
import { css, keyframes, useTheme } from '@emotion/react'
import { Spinner } from '../assets/icons'

const spinnerRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
const spinnerDash = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`

const LoadingSpinner = ({ className, size, color = 'primary' }) => {
  const theme = useTheme()

  return (
    <div
      css={{ display: 'inline-flex' }}
      className={className}
    >
      <Spinner
        data-testid="loading-spinner"
        size={size}
        css={css`
          display: block;
          animation: ${spinnerRotate} 1.4s linear infinite;
          color: ${theme.colors[color]};

          circle {
            animation: ${spinnerDash} 1.4s ease-in-out infinite;
            stroke-dasharray: 80px, 200px;
            stroke-dashoffset: 0px;
          }
        `}
      />
    </div>
  )
}

export default LoadingSpinner
