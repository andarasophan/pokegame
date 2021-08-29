/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import FormInput from '../../components/FormInput'
import * as yup from 'yup'
import { useContext, useEffect, useRef } from 'react'
import { mq } from '../../utils/helpers/mediaQueryHelper'
import { store } from '../../store/store'

const schema = yup.object().shape({
  nickname: yup.string().required('Nickname is required')
})

const SuccessForm = ({
  onSubmit,
  onCancel
}) => {
  const theme = useTheme()
  const { state: { user: { pokemons: myPokemons = [] } = {} } } = useContext(store)
  const inputRef = useRef()
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });
  const { ref: registerRef, ...registerProps } = register('nickname')

  const submit = (values) => {
    // if nickname already exists, set error
    if (myPokemons.find(el => el.nickname === values.nickname)) {
      setError('nickname', {
        type: "manual",
        message: "Nickname already exists",
      })
      return
    }
    if (typeof onSubmit === 'function') onSubmit(values)
  }

  // focus directly when rendered
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <form
      onSubmit={handleSubmit(submit)}
      css={css`
        padding: 0 1.6rem;
        max-height: calc(100vh - 5.2rem);
        width: calc(100vw - 2rem);
        overflow: auto;

        ${mq('sm')} {
          max-width: 360px;
        }
      `}
    >
      <h1 css={{ marginBottom: '0.8rem', color: theme.colors.gray }}>Yeay!</h1>
      <h3 css={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>Give a nickname for your pokeman</h3>
      <FormInput
        {...registerProps}
        ref={el => {
          inputRef.current = el
          registerRef(el)
        }}
        css={{ marginBottom: '1.6rem' }}
        error={Boolean(errors?.nickname)}
        helperText={errors?.nickname?.message}
      />
      <div css={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Button type="submit" css={{ marginRight: '.8rem' }} variant="primary">Add to bag</Button>
        <Button type="button" variant="danger" onClick={onCancel}>Release</Button>
      </div>
    </form>
  )
}

export default SuccessForm
