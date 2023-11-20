import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Description, Header } from '../LandingPage/style'
import { useLocation, useParams } from 'react-router-dom'
import { Label } from 'semantic-ui-react'

const useQuery = () => {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

export const ShopPaymentReturnPage = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const searchParams = useQuery()

  // Get the value of the 'redirect_status' parameter
  const redirectStatus = searchParams.get('redirectStatus')

  const statusRender = useMemo(() => {
    if (redirectStatus === 'succeeded') {
      return <Label color={'green'}>{t('ShopPaymentReturnPage.succeeded')}</Label>
    }
    if (redirectStatus === 'failed') {
      return <Label color={'red'}>{t('ShopPaymentReturnPage.failed')}</Label>
    }
  }, [redirectStatus])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 whitespace-pre-line	">
      <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
        <Header bold>{t('ShopPaymentReturnPage.title')}</Header>
        {statusRender}
      </div>
    </div>
  )
}
