/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import FormInput from '../../components/FormInput'
import * as yup from 'yup'
import { useEffect, useRef } from 'react'
import { mq } from '../../utils/helpers/mediaQueryHelper'

const schema = yup.object().shape({
  nickname: yup.string().required('Nickname is required')
})

const SuccessForm = ({
  onSubmit,
  onCancel
}) => {
  const theme = useTheme()
  const inputRef = useRef()
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });
  const { ref: registerRef, ...registerProps } = register('nickname')

  // focus directly when rendered
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
