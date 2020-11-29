import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Label } from 'semantic-ui-react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { LoginRequest } from '../../../store/auth/authActions'
import { LoginFormData } from './LoginFormData'
import authSelectors from '../../../store/auth/authSelectors'

const ErrorContainer = styled.div`
  font-size: 14px;
  color: red;
  text-align: center;
  padding: 1rem 0;
  font-weight: bold;
`

function showError(errors: any, fieldName: string) {
  if (errors.hasOwnProperty(fieldName)) {
    const { type } = errors[fieldName]
    switch (type) {
      case 'required':
        return (
          <Label basic color="red" pointing="below">
            Field is required
          </Label>
        )
      case 'pattern':
        return (
          <Label basic color="red" pointing="below">
            Invalid email address
          </Label>
        )
      default:
        return (
          <Label basic color="red" pointing="below">
            Unknown error
          </Label>
        )
    }
  }

  return ''
}

export default function LoginForm() {
  const dispatch = useDispatch()

  const setData = (data: LoginFormData) => {
    dispatch(LoginRequest(data))
  }

  const loading = useSelector(authSelectors.useLoading)
  const error = useSelector(authSelectors.useError)

  const { control, handleSubmit, errors } = useForm<LoginFormData>()
  return (
    <form onSubmit={handleSubmit(setData)} className="d-flex flex-column">
      {showError(errors, 'email')}

      <Controller
        as={<Input className="pb-2" placeholder="Login" error={!!errors.email} />}
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }}
      />

      {showError(errors, 'password')}
      <Controller
        as={<Input className="pb-2" type="password" placeholder="Password" error={!!errors.password} />}
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: true }}
      />
      {error ? <ErrorContainer className="ui center red">{error}</ErrorContainer> : ''}

      <button className={`ui button ${loading ? 'loading' : ''} primary`} disabled={loading}>
        Login
      </button>
    </form>
  )
}
