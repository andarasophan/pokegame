/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { memo } from 'react'

const MovesInfo = memo(({ moves }) => {
  const theme = useTheme()

  return (
    <>
      <p css={css`
        padding: .8rem 0;
        position: sticky;
        top: 0;
        background-color: ${theme.colors.white};
      `}>
        MOVES
      </p>
      {
        moves?.map((el, i) => (
          <p
            key={`move-${i}`}
            css={{
              color: theme.colors.gray,
              borderBottom: `1px solid ${theme.colors.gray}`,
              fontSize: '1.2rem',
              padding: '2px 0'
            }}
          >
            {el.move.name}
          </p>
        ))
      }
    </>
  )
})

export default MovesInfo
