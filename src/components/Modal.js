/** @jsxImportSource @emotion/react */
import ReactDOM from 'react-dom'
import { css, useTheme } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'
import { cssPixelBorder } from '../styles/styles'

export const modalPadding = '1rem'
export const cardModalPadding = '1.6rem'

const Modal = ({
  children,
  onClose,
  open,
  duration = 200
}) => {
  const [condition, setCondition] = useState(null)
  const theme = useTheme()

  const handleClose = useCallback(() => {
    if (typeof onClose === 'function') onClose()
  }, [onClose])

  useEffect(() => {
    let animationEntering
    let animationExiting

    if (open) {
      clearTimeout(animationExiting)
      setCondition('ENTER')
      animationEntering = setTimeout(() => {
        setCondition('ENTERED')
      }, duration)
    }
    else {
      clearTimeout(animationEntering)
      setCondition(prev => !prev ? 'EXITED' : 'EXIT')
      animationExiting = setTimeout(() => {
        setCondition('EXITED')
      }, duration)
    }
    return () => {
      clearTimeout(animationEntering)
      clearTimeout(animationExiting)
    }
  }, [open, duration])

  return ReactDOM.createPortal(
    (condition && condition !== 'EXITED') &&
    <div
      data-testid="modal"
      css={css`
        position: fixed;
        z-index: 4;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      `}
    >
      <div css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      `}>
        <div
          style={{
            transform: condition === 'ENTERED' ? 'scale(1)' : 'scale(0)',
            transition: `transform ${duration}ms ease-in-out`
          }}
          css={css`
            max-width: calc(100vw - 2 * ${modalPadding});
            max-height: calc(100vh - 2 * ${modalPadding});
            overflow: hidden;
            padding: 1.6rem 0;
            background-color: ${theme.colors.white};
            ${cssPixelBorder(theme.colors.white)};
          `}
        >
          {children}
        </div>
      </div>
      <div
        style={{
          opacity: condition === 'ENTERED' ? 0.3 : 0,
          transition: `opacity ${duration}ms ease-in-out`
        }}
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${theme.colors.dark};
          top: 0;
          left: 0;
        `}
        onClick={handleClose}
      />
    </div>,
    document.body
  )
}

export default Modal
