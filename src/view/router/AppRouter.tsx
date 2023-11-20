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
import StoriesDetailsPage from '../pages/StoriesDetailsPage/StoriesDetailsPage'
import { CreateStoryPage } from '../pages/CreateStoryPage/CreateStoryPage'
import { LandingPage } from '../pages/LandingPage/LandingPage'
import { StatuePage } from '../pages/StatuePage/StatuePage'
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage/PrivacyPolicyPage'
import { VoucherShopPage } from '../pages/VoucherShopPage/VoucherShopPage'
import { ShopPaymentReturnPage } from '../pages/ShopPaymentReturnPage/ShopPaymentReturnPage'

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
            <PrivateRoute
              path={RouteEnum.Stories}
              exact
              component={StoriesDetailsPage}
              redirect={RouteEnum.Login}
              role={UserRoles.NARRATOR}
            />
            <PrivateRoute
              path={RouteEnum.CreateStory}
              exact
              component={CreateStoryPage}
              redirect={RouteEnum.Login}
              role={UserRoles.NARRATOR}
            />
            <LogoutRoute exact path={RouteEnum.Logout} redirect={RouteEnum.Login} />

            <PublicRoute path={RouteEnum.Statue} exact component={StatuePage} redirect={RouteEnum.Main} />
            <PublicRoute
              path={RouteEnum.ShopPaymentReturn}
              exact
              component={ShopPaymentReturnPage}
              redirect={RouteEnum.Main}
            />
            <PublicRoute path={RouteEnum.Shop} exact component={VoucherShopPage} redirect={RouteEnum.Main} />
            <PublicRoute path={RouteEnum.Privacy} exact component={PrivacyPolicyPage} redirect={RouteEnum.Main} />
            <PublicRoute path={RouteEnum.Main} exact component={LandingPage} redirect={RouteEnum.Main} />

            <Route component={NotFoundPage} />
          </Switch>
        </RouterContainer>
        <Footer height={footerHeight} />
      </Suspense>
    </Router>
  )
}

export default AppRouter
