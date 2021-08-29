/** @jsxImportSource @emotion/react */
import { css, keyframes, useTheme } from '@emotion/react'
import { PokeballIcon } from '../assets/icons'

const spinnerRotate = keyframes`
  0% {
    top: -40px;
		animation-timing-function: ease-in;
	}
	50% {
    top: -5px;
		height: -5px;
		animation-timing-function: ease-out;
	}
	55% {
    top: 0px; 
		animation-timing-function: ease-in;
  }
	65% {
    top: -15px; 
		animation-timing-function: ease-out;
  }
	95% {
		top: -40px;		
		animation-timing-function: ease-in;
	}
	100% {
    top: -40px;
		animation-timing-function: ease-in;
	}
`

const SplashScreen = () => {
  const theme = useTheme()

  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      color: ${theme.colors.gray};
      p {
        margin-top: 1.6rem;
        font-size: 1.4rem;
      }
    `}>
      <div css={css`
        position: relative;
        width: 70px;
        height: 70px;
        svg {
          top: 0;
          left: 0;
          position: absolute;
          animation: ${spinnerRotate} 1.4s linear infinite;
        }
      `}>
        <PokeballIcon size={70} />
      </div>
      <p>Loading..</p>
    </div>
  )
}

export default SplashScreen
