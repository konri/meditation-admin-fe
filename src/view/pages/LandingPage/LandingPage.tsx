import React from 'react'
import { Title } from '../../components/styled-components/Title'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import RouteEnum from '../../router/RouteEnum'

export const LandingPage = () => {
  const { t } = useTranslation()

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 mt-4">
      <Title>{t('HomePage.title')}</Title>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5">
        <Card.Group>
          <Link to={RouteEnum.Login} className="p-2">
            Portal narratora
          </Link>
        </Card.Group>
      </div>
    </div>
  )
}
