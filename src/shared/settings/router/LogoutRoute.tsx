import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { RouteProps } from 'react-router'
import { Logout } from '../../../store/auth/authActions'
import { Redirect, Route } from 'react-router-dom'

export interface LogoutRoute extends RouteProps {
  redirect: string
}

const LogoutRoute = (props: LogoutRoute) => {
  const { component: Component, redirect, ...rest } = props
  const dispatch = useDispatch()
  dispatch(Logout())
  return <Route {...rest} render={(p) => <Redirect to={redirect} />} />
}

export default LogoutRoute
