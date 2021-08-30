/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { useHistory } from 'react-router'
import { BackIcon } from '../../assets/icons'
import FormInput from '../../components/FormInput'

export const headerHeight = '56px'

const Header = ({
  inputValue,
  onChange
}) => {
  const theme = useTheme()
  const { goBack } = useHistory()

  return (
    <div css={css`
      display: flex;
      align-items: center;
      height: ${headerHeight};
      padding: 1.2rem;
      background-color: ${theme.colors.gray};
    `}>
      <button
        onClick={goBack}
        css={css`
          display: flex;
          margin-right: 1.6rem;
          flex-shrink: 0;
        `}
      >
        <BackIcon />
      </button>
      <FormInput
        onChange={onChange}
        value={inputValue}
        placeholder="Search"
        css={css`
          flex: 1;
        `}
      />
    </div>
  )
}

export default Header
