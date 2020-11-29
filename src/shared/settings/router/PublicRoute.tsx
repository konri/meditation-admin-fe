import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Store } from '../../../store/rootReducer'

// @ts-ignore
const PublicRoute = ({ component: Component, restricted = false, redirect, ...rest }) => {
  const user = useSelector((state: Store) => state.auth.user)
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) => (restricted && user != null ? <Redirect to={redirect} /> : <Component {...props} />)}
    />
  )
}

export default PublicRoute
