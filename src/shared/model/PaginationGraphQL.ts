export interface Sort {
  field: string
  order: 'asc' | 'desc'
}

export interface PaginationGraphQL {
  take: number
  cursor?: string
  skip?: number
  sort?: Array<Sort>
}
