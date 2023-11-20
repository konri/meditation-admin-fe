import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export interface SubmitPayload {
  userName: string
  email: string
  codePrefix: string
}
interface ShopFormProps {
  loading: boolean
  onHandleSubmit: (payload: SubmitPayload) => void
}

function isValidEmail(email: string) {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const ShopForm = ({ onHandleSubmit, loading }: ShopFormProps) => {
  const { t } = useTranslation()

  const [userName, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [codePrefix, setCodePrefix] = useState('')

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      onHandleSubmit({ userName, email, codePrefix })
    } else {
      setEmailError(true)
    }
  }

  return (
    <Element name="shop-form">
      <div className="flex flex-wrap bg-white rounded shadow w-100">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="px-6 py-8 lg:px-8 text-center">
            <h4 className="mb-8 text-2xl font-heading">{t('VoucherShop.vouchers.shopForm.finish')}</h4>
            <div className="flex flex-column align-items-start text-sm">
              <span className="pb-1">{t('VoucherShop.vouchers.shopForm.userName')}</span>
              <div className="flex mb-6 px-4 bg-gray-50 rounded w-100">
                <input
                  value={userName}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 focus:outline-none"
                  type="text"
                  placeholder={t('VoucherShop.vouchers.shopForm.userNamePlaceholder')}
                />
              </div>
            </div>

            <div className="flex flex-column align-items-start text-sm mb-4">
              <span className="pb-1">E-mail</span>
              <div className="flex  px-4 bg-gray-50 rounded w-100">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 focus:outline-none"
                  type="email"
                  placeholder="kontakt@zencast.app"
                />
                <svg
                  className="h-6 w-6 ml-4 my-auto text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  ></path>
                </svg>
              </div>
              {emailError && <span className="pb-1 alert-danger">{t('VoucherShop.vouchers.shopForm.emailError')}</span>}
            </div>
            <div className="flex flex-column align-items-start text-sm">
              <span className="pb-1">{t('VoucherShop.vouchers.shopForm.code')}</span>
              <div className="flex mb-6 px-4 bg-gray-50 rounded w-100">
                <input
                  value={codePrefix}
                  onChange={(event) => setCodePrefix(event.target.value)}
                  className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 focus:outline-none"
                  type="text"
                  placeholder={t('VoucherShop.vouchers.shopForm.codePlaceholder')}
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="block w-full p-4 text-center text-white font-bold leading-none hover:bg-green-700 rounded-l-xl rounded-t-xl transition duration-200"
              style={{ backgroundColor: '#f56a4d' }}
              onClick={handleSubmit}
            >
              {loading && t('VoucherShop.vouchers.shopForm.loading')}
              {!loading && t('VoucherShop.vouchers.shopForm.goToPayment')}
            </button>
          </div>
        </div>
        <div
          className="py-10 w-full md:w-1/2 lg:rounded-r overflow-hidden flex flex-col"
          style={{ backgroundColor: '#f56a4d' }}
        >
          <img className="w-full md:max-w-xs mx-auto my-auto" src="/assets/men-on-chair-green-background.png" alt="" />
          <h3 className="mb-4 max-w-sm mx-auto text-center text-xl text-white">
            {t('VoucherShop.vouchers.shopForm.motto')}
          </h3>
        </div>
      </div>
    </Element>
  )
}
