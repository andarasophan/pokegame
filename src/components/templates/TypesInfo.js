/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { cssPixelBorder } from '../../styles/styles'

const TypesInfo = ({ types, className }) => {
  const theme = useTheme()
  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      `}
    >
      {
        types.map(el => (
          <p
            key={el.type.name}
            css={css`
              margin: 2px;
              background-color: ${theme.colors.dark};
              color: ${theme.colors.white};
              padding: 4px;
              font-size: 0.8rem;
              ${cssPixelBorder(theme.colors.dark)}
            `}
          >
            {el.type.name}
          </p>
        ))
      }
    </div>
  )
}

export default TypesInfo
