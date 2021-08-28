/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { cssPixelBorder } from '../styles/styles';
import theme from '../styles/theme';
import LoadingSpinner from './LoadingSpinner';

const cssButton = (variant) => css`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  text-shadow: 2px 2px 0 ${theme.colors.gray};
  color: white;
  background-color: ${theme.colors[variant]};
  text-transform: uppercase;
  ${cssPixelBorder(theme.colors[variant])};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: 1;
    transition: background-color 250ms ease-in-out;
  }

  :focus {
    &::before {
      background-color: rgba(0,0,0,.2);
    }
  }

  :disabled {
    cursor: not-allowed;
  }
`

const Button = ({
  href,
  externalLink,
  onClick,
  children,
  variant,
  loading,
  disabled,
  ...props
}) => {
  const ActionTag = href ? (externalLink ? 'a' : Link) : 'button'

  const handleOnClick = (e) => {
    if (typeof onClick === 'function') onClick(e)
  }

  return (
    <ActionTag
      css={cssButton(variant)}
      onClick={handleOnClick}
      to={href}
      href={href}
      disabled={loading ? loading : disabled}
      {...props}
    >
      {
        loading &&
        <LoadingSpinner color="white" size="12" css={{ marginRight: '0.5rem' }} />
      }
      {children}
    </ActionTag>
  )
}

export default Button
