/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { PencilIcon } from '../../assets/icons'

const playerNameHeight = 24
const playerNameWidth = 190

const defaultName = 'Mr. Collector'

const PlayerName = () => {
  const [edit, setEdit] = useState(false)

  const handleSubmit = (value) => {
    setEdit(false)
    console.log(value)
  }

  return (
    <div css={css`
      word-break: break-word;
      width: ${`${playerNameWidth}px`};
    `}>
      {
        edit ?
          <Form
            onSubmit={handleSubmit}
            initialValue={defaultName}
          />
          :
          <View
            onClickEdit={() => setEdit(true)}
            name={defaultName}
          />
      }
    </div>
  )
}

const View = ({ onClickEdit, name }) => (
  <div css={css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      color: inherit;
      display: flex;
      flex-shrink: 0;
    }
    p {
      line-height: ${`${playerNameHeight}px`};
      margin-right: .8rem;
    }
  `}>
    <p>{name}</p>
    <button onClick={onClickEdit}><PencilIcon size={24} /></button>
  </div>
)

const Form = ({ onSubmit, initialValue = defaultName }) => {
  const inputRef = useRef()
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    inputRef.current?.select()
  }, [])

  return (
    <input
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
      ref={inputRef}
      autoComplete="off"
      spellCheck={false}
      onBlur={() => onSubmit(value)}
      onKeyDown={({ key }) => {
        if (key === 'Enter') onSubmit(value)
      }}
      css={css`
        color: inherit;
        width: 100%;
        height: ${`${playerNameHeight}px`};
        line-height: ${`${playerNameHeight}px`};
        background: none;
        border: 0;
        box-shadow: none;
        font-family: inherit;
        font-size: inherit;
        &:focus {
          outline: none;
        }
      `}
    />
  )
}

export default PlayerName
