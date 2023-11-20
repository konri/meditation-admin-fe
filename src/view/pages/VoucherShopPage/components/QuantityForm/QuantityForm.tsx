import { Container } from './style'
import { QuantityInput } from '../QuantityInput/QuantityInput'
import { VoucherCardItem } from '../../shared/VoucherCardItem'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Element, scroller } from 'react-scroll'

interface QuantityFormProps {
  item: VoucherCardItem
  onChange: (quantity: number) => void
}
export const QuantityForm = ({ item, onChange }: QuantityFormProps) => {
  const { t } = useTranslation()
  const [quantity, setQuantity] = useState(1)
  const total = quantity * item.prize
  return (
    <Element name="quantity-form">
      <Container className="container px-4 py-4 mb-4 mx-auto rounded-xl" id="cart-form">
        <h1 className="font-heading text-coolGray-800 text-3xl font-semibold mb-6">
          {t('VoucherShop.vouchers.quantity.cart')}
        </h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <div className="mb-6 py-4 overflow-x-auto">
              <div className="flex w-full">
                <div className="w-96">
                  <div className="w-full py-4 px-6 border-b border-coolGray-200">
                    <span className="text-rhino-800">{t('VoucherShop.vouchers.quantity.product')}</span>
                  </div>
                  <div className="w-full py-4 px-6 border-b border-coolGray-200 h-32 flex items-center">
                    <div className="flex items-center gap-4">
                      <div>
                        <h4 className="text-rhino-800">{item.title}</h4>
                        <p className="text-rhino-300">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-40">
                  <div className="py-4 px-6 border-b border-coolGray-200">
                    <span className="text-rhino-800">{t('VoucherShop.vouchers.quantity.price')}</span>
                  </div>
                  <div className="py-4 px-6 border-b border-coolGray-200 h-32 flex items-center">
                    <p className="text-rhino-800">
                      {item.prize} {item.currency}
                    </p>
                  </div>
                </div>
                <div className="w-40">
                  <div className="py-4 px-6 border-b border-coolGray-200">
                    <span className="text-rhino-800">{t('VoucherShop.vouchers.quantity.quantity')}</span>
                  </div>
                  <div className="py-4 px-6 border-b border-coolGray-200 h-32 flex items-center">
                    <QuantityInput
                      onChange={(quantity) => {
                        setQuantity(quantity)
                        onChange(quantity)
                      }}
                    />
                  </div>
                </div>
                <div className="w-40">
                  <div className="py-4 px-6 border-b border-coolGray-200">
                    <span className="text-rhino-800">{t('VoucherShop.vouchers.quantity.subtotal')}</span>
                  </div>
                  <div className="py-4 px-6 border-b border-coolGray-200 h-32 flex items-center">
                    <p className="text-rhino-800">
                      {total} {item.currency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-rhino-700 text-lg mb-4 font-semibold">Cart totals</h2>
              <div className="pb-4 border-b border-coolGray-200 flex flex-wrap gap-2 justify-between items-center mb-4">
                <p className="text-rhino-300">{t('VoucherShop.vouchers.quantity.subtotal')}</p>
                <p className="text-rhino-800">
                  {total} {item.currency}
                </p>
              </div>
              <p className="text-rhino-800 mb-4">{t('VoucherShop.vouchers.quantity.shipping')}</p>
              <div className="mb-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-rhino-800">0.00 {item.currency}</p>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <h2 className="text-rhino-700 font-semibold text-lg">{t('VoucherShop.vouchers.quantity.total')}</h2>
                <h2 className="text-rhino-700 font-semibold text-lg">
                  {total} {item.currency}
                </h2>
              </div>
              <button
                className="bg-purple-500 py-3 px-4 rounded-sm text-white text-center hover:bg-purple-600 transition duration-200 w-full inline-block"
                onClick={() => {
                  scroller.scrollTo('shop-form', {
                    duration: 800,
                    delay: 0,
                    offset: -50,
                    smooth: 'easeInOutQuart',
                  })
                }}
              >
                {t('VoucherShop.vouchers.quantity.goToCheckout')}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Element>
  )
}
