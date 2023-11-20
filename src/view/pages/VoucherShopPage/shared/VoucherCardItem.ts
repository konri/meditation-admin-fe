export enum VoucherCardType {
  SINGLE = 'SINGLE',
  FAMILY = 'FAMILY',
}

export interface VoucherCardItem {
  id: string
  title: string
  type: VoucherCardType
  prize: number
  currency: string
  amountMonth: number
  desc: string
  mostPopular: boolean
  language: string
  createdAt: Date
  updatedAt: Date
}
