import { VoucherCardItem, VoucherCardType } from '../../shared/VoucherCardItem'
import { Button, VoucherCardButton } from './style'
import { useTranslation } from 'react-i18next'

interface VoucherCardProps {
  selected: boolean
  onClick: () => void
  item: VoucherCardItem
}

export const VoucherCard = ({ selected, onClick, item }: VoucherCardProps) => {
  const { t } = useTranslation()
  return (
    <VoucherCardButton selected={selected} className={`mb-4 p-12 pt-3 pr-3 rounded-2xl`} onClick={onClick}>
      <div className="flex mb-6 px-4 py-2 h-5">
        {item.mostPopular && (
          <div className="justify-end w-100">
            <span className="absolute -mt-3 align-self-end px-4 py-2 text-sm text-white tracking-tight font-medium bg-gray-600 rounded-full">
              {t('VoucherShop.vouchers.mostPopular')}
            </span>
          </div>
        )}

        {item.type === VoucherCardType.FAMILY && (
          <span className="absolute -ml-5 -mt-3  px-4 py-2 text-sm text-white tracking-tight font-medium bg-success rounded-full">
            {t('VoucherShop.vouchers.family')}
          </span>
        )}
      </div>

      <div className="pr-9">
        <h4 className="font-heading mb-6 text-4xl tracking-tighter" data-config-id="auto-txt-9-6">
          {item.title}
        </h4>
        <p className="mb-3 text-3xl font-semibold" data-config-id="auto-txt-10-6">
          {item.prize} {item.currency}
        </p>
        <p className="flex tracking-tight h-3 align-items-center justify-content-center">{item.amountMonth} msc</p>
        <p className="flex tracking-tight h-10 align-items-center justify-content-center">{item.desc}</p>
        <Button className="w-100 px-4 py-3 text-sm text-white tracking-tight font-bold rounded-full">
          {t('VoucherShop.vouchers.buyNow')}
        </Button>
      </div>
    </VoucherCardButton>
  )
}
