import { Dimmer, Loader } from 'semantic-ui-react'
import { Route, Router, Switch } from 'react-router-dom'
import React, { Suspense } from 'react'
import LoginPage from '../pages/LoginPage/LoginPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { AppHeader } from '../components/header/Header'
import history from '../../shared/settings/history'
import PrivateRoute from '../../shared/settings/router/PrivateRouter'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import PublicRoute from '../../shared/settings/router/PublicRoute'
import { UserRoles } from '../../shared/model/UserRoles'
import RouteEnum from './RouteEnum'
import LogoutRoute from '../../shared/settings/router/LogoutRoute'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { HomePage } from '../pages/HomePage/HomePage'

function Loading() {
  return (
    <Dimmer active>
      <Loader />
    </Dimmer>
  )
}

const footerHeight = '4rem'
const RouterContainer = styled.div`
  padding-top: 8rem;
  min-height: calc(100vh - ${footerHeight});
  max-width: 100vw;
  overflow: hidden;
  display: flex;
`

function AppRouter() {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <RouterContainer>
          <Switch>
            <PublicRoute path={RouteEnum.Login} exact component={LoginPage} restricted redirect={RouteEnum.Dashboard} />
            <PrivateRoute
              path={RouteEnum.Dashboard}
              exact
              role={UserRoles.ADMIN}
              component={DashboardPage}
              redirect={RouteEnum.Login}
            />
            <PrivateRoute
              path={RouteEnum.Home}
              exact
              component={HomePage}
              redirect={RouteEnum.Login}
              role={UserRoles.NARRATOR}
            />
            <LogoutRoute exact path={RouteEnum.Logout} redirect={RouteEnum.Login} />
            <Route component={NotFoundPage} />
          </Switch>
        </RouterContainer>
        <Footer height={footerHeight} />
      </Suspense>
    </Router>
  )
}

export default AppRouter
