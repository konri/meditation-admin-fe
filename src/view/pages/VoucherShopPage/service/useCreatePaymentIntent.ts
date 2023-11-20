import axios from 'axios'
import { APP_CONFIG } from '../../../../config'
import { useEffect, useState } from 'react'
import { VoucherCardItem } from '../shared/VoucherCardItem'

export interface PaymentWebIntentRequest {
  voucherId: string
  email: string
  userName: string
  codePrefix: string
  quantity: number
  payment_method_types: string[]
}

export function useCreatePaymentIntent() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<string>()
  const [error, setError] = useState()

  function createPayment(request: PaymentWebIntentRequest) {
    setLoading(true)
    return axios
      .post(`${APP_CONFIG.API}/paymentWeb/create-payment-intent`, request)
      .then((response) => {
        const { clientSecret, error } = response.data
        setData(clientSecret)
        setError(error)
        setLoading(false)
      })
      .catch((e) => {
        setError(e)
        setLoading(false)
      })
  }

  return { loading, data, error, createPayment }
}
