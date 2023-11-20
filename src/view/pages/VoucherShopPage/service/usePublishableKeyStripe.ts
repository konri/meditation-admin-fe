import axios from 'axios'
import { APP_CONFIG } from '../../../../config'
import { useEffect, useState } from 'react'
import { VoucherCardItem } from '../shared/VoucherCardItem'

export function usePublishableKeyStripe(paymentMethod: string) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<string>()
  const [error, setError] = useState()

  useEffect(() => {
    axios
      .get(`${APP_CONFIG.API}/paymentWeb/stripe-key?paymentMethod=${paymentMethod}`)
      .then((res) => {
        const { publishableKey } = res.data
        setData(publishableKey)
        setLoading(false)
      })
      .catch((e) => {
        setError(e)
        setLoading(false)
      })
  }, [])
  return { loading, data, error }
}
