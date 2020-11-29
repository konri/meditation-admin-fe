import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Store } from '../../../store/rootReducer'
import { UserRoles } from '../../model/UserRoles'
import { UserDetails } from '../../model/UserDetails'
import { RouteProps } from 'react-router'

function showComponentOnRole(role: UserRoles | Array<UserRoles> | undefined, user: UserDetails) {
  if (role == null) {
    return true
  }

  if (Array.isArray(role)) {
    return role.includes(user.role)
  }

  return user.role === role
}

interface PrivateRouterProps extends RouteProps {
  component: any
  redirect: string
  role?: UserRoles | Array<UserRoles>
}

const PrivateRoute = (props: PrivateRouterProps) => {
  const { component: Component, redirect, role, ...rest } = props
  const user = useSelector((state: Store) => state.auth.user)
  return (
    <Route
      {...rest}
      render={(p) =>
        user != null ? (
          showComponentOnRole(role, user) ? (
            <Component {...p} />
          ) : (
            <Redirect to="/forbidden" />
          )
        ) : (
          <Redirect to={redirect} />
        )
      }
    />
  )
}

export default PrivateRoute
