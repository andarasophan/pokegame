/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { forwardRef, memo } from 'react';
import { cssPixelBorder } from '../styles/styles';

const FormInput = memo(forwardRef((
  {
    name,
    className,
    value,
    onChange,
    error,
    helperText,
    placeholder = 'Type something..',
    autoComplete = "off",
    spellCheck = false,
    readOnly,
    disabled,
    ...props
  },
  ref
) => {
  const theme = useTheme()

  return (
    <div className={className}>
      <div
        css={css`
        background-color: ${theme.colors.white};
        ${cssPixelBorder(theme.colors.dark)};

        input {
          width: 100%;
          display: block;
          font-family: inherit;
          font-size: 1rem;
          background: none;
          padding: 0.6rem 0.4rem;
          border: 0;
          box-shadow: none;

          &:focus {
            outline: none;
          }

          &::placeholder {
            color: ${theme.colors.gray};
          }
        }
      `}
      >
        <input
          {...props}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          spellCheck={spellCheck}
          ref={ref}
        />
      </div>
      {
        helperText &&
        <small
          style={{
            color: error ? theme.colors.danger : undefined
          }}
          css={css`
            font-size: .8rem;
          `}
        >
          {helperText}
        </small>
      }
    </div>
  )
}));

export default FormInput;
