import { gql } from '@apollo/client'
import { StoryWithMeditations } from '../../../StoriesDetailsPage/StoriesDetails.schema'

export interface GetIntroductionStories {
  getIntroductionStories: Array<StoryWithMeditations>
}
export const GET_INTRODUCTION_STORIES = gql`
  query GetIntroductionStories($language: String!) {
    getIntroductionStories(lang: $language) {
      id
      title
      user {
        name
        narratorDetails {
          title
          photoPath
        }
      }
      meditations {
        id
        path
      }
    }
  }
`
