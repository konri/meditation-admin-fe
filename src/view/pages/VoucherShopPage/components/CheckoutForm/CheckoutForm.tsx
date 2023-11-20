import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { APP_CONFIG } from '../../../../../config'

interface CheckoutFormProps {
  clientSecret: string
}

export const CheckoutForm = forwardRef(({ clientSecret }: CheckoutFormProps, ref) => {
  useImperativeHandle(ref, () => ({
    pay(e: any) {
      console.log('payment')
      handleSubmit(e)
    },
  }))

  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!stripe) {
      return
    }
    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [clientSecret, stripe])

  const handleSubmit = async (e?: any) => {
    e?.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: APP_CONFIG.STRIPE_REDIRECT,
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  const paymentElementOptions: any = {
    layout: 'tabs',
  }

  return (
    <form>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
    </form>
  )
})
