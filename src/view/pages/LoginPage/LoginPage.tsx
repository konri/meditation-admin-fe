import React, { useState } from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'

interface IProps {}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #2185d0;
  font-weight: bold;
`

const Container = styled.div`
  width: 450px;
  @media screen and (max-width: 600px) { 
    width: 100%;
`

export default function LoginPage(props: React.PropsWithChildren<IProps>): React.FunctionComponentElement<IProps> {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <Container className="ui segment">
        <Title>Let's login in!</Title>
        <LoginForm />
      </Container>
    </div>
  )
}
