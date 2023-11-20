import React, { useRef, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { LANG_LS } from '../../../../../translations' // You can create a separate CSS file for styling
import { Button, Header, Icon } from 'semantic-ui-react'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
import { useTranslation } from 'react-i18next'
import { Modal } from 'react-bootstrap'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  clientSecret: string | undefined
  stripePromise: any
}

const PaymentModal: React.FC<ModalProps> = ({ isOpen, closeModal, clientSecret, stripePromise }) => {
  const formRef = useRef()
  const { t } = useTranslation()
  const stripeLocale = localStorage.getItem(LANG_LS) || 'pl'

  const appearance = {
    theme: 'stripe',
  }

  const options: any = {
    clientSecret,
    appearance,
    locale: stripeLocale,
  }

  const payHandle = (e: any) => {
    ;(formRef?.current as any)?.pay(e)
  }

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{t('ShopPayment.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {clientSecret && stripePromise && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm ref={formRef} clientSecret={clientSecret} />
          </Elements>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button color="green" onClick={payHandle}>
          <Icon name="checkmark" /> {t('ShopPayment.pay')}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PaymentModal
