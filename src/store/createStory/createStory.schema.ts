import { gql } from '@apollo/client'
import { StoryWithMeditations } from '../../view/pages/StoriesDetailsPage/StoriesDetails.schema'

export interface GetNarratorStories {
  getMyStories: { items: Array<StoryWithMeditations>; total: number }
}
export const CREATE_STORY = gql`
  mutation CreateStory($data: StoryInput!) {
    createStory(data: $data) {
      id
    }
  }
`
