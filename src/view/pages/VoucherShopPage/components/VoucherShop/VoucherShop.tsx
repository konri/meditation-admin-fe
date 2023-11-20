import React, { useMemo, useState } from 'react'
import { LANG_LS } from '../../../../../translations'
import { useVoucherCards } from '../../service/useVoucherCards'
import { Description } from '../../../LandingPage/style'
import { useTranslation } from 'react-i18next'
import { VoucherCard } from '../VoucherCard/VoucherCard'
import { Container } from './style'
import { VoucherCardItem } from '../../shared/VoucherCardItem'
import { ShopForm, SubmitPayload } from '../ShopForm/ShopForm'
import { QuantityForm } from '../QuantityForm/QuantityForm'
import { scroller } from 'react-scroll'
import { usePublishableKeyStripe } from '../../service/usePublishableKeyStripe'
import { loadStripe } from '@stripe/stripe-js'
import { useCreatePaymentIntent } from '../../service/useCreatePaymentIntent'
import PaymentModal from '../PaymentModal/PaymentModal'

export const VoucherShop = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { t } = useTranslation()
  const language = localStorage.getItem(LANG_LS) || 'PL'
  const [quantity, setQuantity] = useState(1)
  const { loading, data, error } = useVoucherCards(language)
  const {
    loading: publishableStripeLoading,
    data: publishableStripeKey,
    error: publishableStripeError,
  } = usePublishableKeyStripe('p24')

  const {
    loading: paymentIntentLoading,
    data: clientSecret,
    error: paymentIntentError,
    createPayment,
  } = useCreatePaymentIntent()

  const stripePromise = useMemo(() => {
    if (!publishableStripeLoading && publishableStripeKey != undefined) {
      return loadStripe(publishableStripeKey)
    }
    return undefined
  }, [publishableStripeLoading, publishableStripeKey])

  const [selectedVoucher, setSelectedVoucher] = useState<VoucherCardItem | undefined>()

  if (loading) {
    return (
      <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
        <Description>{t('VoucherShop.vouchers.loading')}</Description>
      </div>
    )
  }

  const handleSubmit = ({ userName, email, codePrefix }: SubmitPayload) => {
    createPayment({
      voucherId: selectedVoucher!.id,
      email,
      userName,
      codePrefix,
      quantity,
      payment_method_types: ['p24'],
    }).then(() => setModalOpen(true))
  }

  return (
    <>
      <PaymentModal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        clientSecret={clientSecret}
        stripePromise={stripePromise}
      />
      <div>
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {data
            ?.sort((a, b) => a.prize - b.prize)
            ?.map((item) => (
              <VoucherCard
                key={item.id}
                selected={selectedVoucher?.id === item.id}
                onClick={() => {
                  setSelectedVoucher(item)

                  setTimeout(() => {
                    scroller.scrollTo('quantity-form', {
                      duration: 800,
                      delay: 0,
                      offset: -50,
                      smooth: 'easeInOutQuart',
                    })
                  }, 100)
                }}
                item={item}
              />
            ))}
        </Container>
        {selectedVoucher && (
          <QuantityForm
            item={selectedVoucher}
            onChange={(quantity) => {
              setQuantity(quantity)
            }}
          />
        )}
        {selectedVoucher && <ShopForm onHandleSubmit={handleSubmit} loading={paymentIntentLoading} />}
      </div>
    </>
  )
}
