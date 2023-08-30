import { gql } from '@apollo/client'

export interface PageableResponse<TItem> {
  items: TItem[]
  total: number
}

export interface NarratorWithDetails {
  id: string
  name: string
  firstName: string
  secondName: string
  narratorDetails: {
    photoPath: string
    title: string
    description: string
    facebook: string
    instagram: string
    linkedin: string
    web: string
  }
}

export interface AllNarrators {
  allNarrators: PageableResponse<NarratorWithDetails>
}

export const GET_NARRATORS_BY_LANGUAGE = gql`
  query AllNarrators($language: LanguageCode!) {
    allNarrators(
      data: { language: $language }
      pagination: { skip: 0, take: 100, sort: { field: "secondName", order: desc } }
    ) {
      items {
        id
        name
        firstName
        secondName
        narratorDetails {
          photoPath
          title
          description
          facebook
          instagram
          linkedin
          web
        }
      }
    }
  }
`
