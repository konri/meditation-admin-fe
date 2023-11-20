import React from 'react'
import { useTranslation } from 'react-i18next'
import { Description, Header } from '../LandingPage/style'
import { VoucherShop } from './components/VoucherShop/VoucherShop'

export const VoucherShopPage = () => {
  const { t } = useTranslation()

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 whitespace-pre-line	">
      <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
        <Header bold>{t('VoucherShop.title')}</Header>
        <VoucherShop />
      </div>
    </div>
  )
}
