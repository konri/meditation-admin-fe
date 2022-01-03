import { gql } from '@apollo/client'
import { StoryType } from '../../../shared/model/StoryType'

export interface StoryWithMeditations {
  id: string
  type: StoryType
  title: string
  description: string
  photo: string
  hashtags: Array<{ title: string }>
  availableDate: string
  createdAt: string
  language: string
  isFree: boolean
  disable: boolean
  meditations: Array<{
    title: string
    duration: number
  }>
}

export interface GetNarratorStories {
  getMyStories: { items: Array<StoryWithMeditations>; total: number }
}
export const GET_NARRATOR_STORIES = gql`
  query GetMyStories($pagination: CursorPagination) {
    getMyStories(pagination: $pagination) {
      items {
        id
        type
        title
        description
        photo
        hashtags {
          title
        }
        availableDate
        language
        disable
        isFree
        createdAt
        meditations {
          title
          duration
        }
      }
      total
    }
  }
`
