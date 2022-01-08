import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Store } from '../rootReducer'
import { apolloClient } from '../../index'
import { CREATE_STORY } from './createStory.schema'

export interface Meditation {
  id: number
  sequence: number
  duration: number
  title: string
  path: string
}

export interface Story {
  title: string
  description: string
  type: string
  language: string
  isFree: boolean
  availableDate: Date
  storyHashtagIds: Array<number>
  photo: string
  meditations: Array<Meditation>
}

export interface CreateStoryState {
  form: {
    isSubmitted: boolean
    loading: boolean
    error: string | null
    success: boolean
  }
  story: Story
}

const createInitialMeditation = (): Meditation => ({
  id: Date.now(),
  sequence: 1,
  duration: 0,
  title: '',
  path: '',
})

const initialState: CreateStoryState = {
  form: {
    isSubmitted: false,
    loading: false,
    error: null,
    success: false,
  },
  story: {
    title: '',
    description: '',
    type: '',
    language: '',
    isFree: false,
    availableDate: new Date(),
    storyHashtagIds: [],
    photo: '',
    meditations: [createInitialMeditation()],
  },
}

function checkFormCorrectness(story: Story) {
  const { title, description, type, language, storyHashtagIds, photo, meditations } = story
  if (
    title.length === 0 ||
    description.length === 0 ||
    type.length === 0 ||
    language.length === 0 ||
    storyHashtagIds.length === 0 ||
    photo.length === 0 ||
    meditations.length === 0
  ) {
    return false
  }

  const notFiledMeditations = meditations.filter((meditation: Meditation) => {
    return meditation.title.length === 0 || meditation.path.length === 0
  })
  if (notFiledMeditations.length > 0) return false

  return true
}

export const onSaveStory = createAsyncThunk('CreateStory/save', async (args, { getState }) => {
  const {
    createStory: { story },
  } = getState() as Store
  if (checkFormCorrectness(story)) {
    const availableDate = new Date(story.availableDate)
    availableDate.setHours(0, 0, 0)
    const data = {
      ...story,
      availableDate,
      meditations: story.meditations.map((meditation, index) => ({
        sequence: index + 1,
        duration: meditation.duration,
        title: meditation.title,
        path: meditation.path,
      })),
    }
    const mutation = await apolloClient.mutate({
      mutation: CREATE_STORY,
      variables: { data },
    })
    console.log('mutation', mutation)
    return mutation
  }
  throw new Error('Empty form')
})

export const slice = createSlice({
  name: 'CreateStory',
  initialState,
  reducers: {
    onEdit: (state: CreateStoryState, action: PayloadAction<{ key: string; value: string }>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state.story[key] = value
    },
    onMeditationAdd: (state: CreateStoryState, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.story.meditations.findIndex((meditation: Meditation) => meditation.id === id) + 1
      // @ts-ignore
      state.story.meditations.splice(index, 0, createInitialMeditation())
    },
    onMeditationRemove: (state: CreateStoryState, action: PayloadAction<number>) => {
      const index = action.payload
      // @ts-ignore
      state.story.meditations = state.story.meditations.filter((meditation) => meditation.id !== index)
    },
    onMeditationChange: (
      state: CreateStoryState,
      action: PayloadAction<{ id: number; key: string; value: string | number | undefined }>
    ) => {
      const { id, key, value } = action.payload
      state.story.meditations = state.story.meditations.map((meditation) => {
        if (meditation.id === id) {
          return {
            ...meditation,
            [key]: value,
          }
        }
        return meditation
      })
    },
    onReset: (state: CreateStoryState) => {
      return {
        ...state,
        story: {
          title: '',
          description: '',
          type: '',
          language: '',
          isFree: false,
          availableDate: new Date(),
          storyHashtagIds: [],
          photo: '',
          meditations: [createInitialMeditation()],
        },
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onSaveStory.pending, (state, { payload }) => {
      state.form.loading = true
      state.form.isSubmitted = true
      state.form.success = false
    })
    builder.addCase(onSaveStory.fulfilled, (state, { payload }) => {
      return {
        form: {
          isSubmitted: false,
          loading: false,
          error: null,
          success: true,
        },
        story: {
          title: '',
          description: '',
          type: '',
          language: '',
          isFree: false,
          availableDate: new Date(),
          storyHashtagIds: [],
          photo: '',
          meditations: [createInitialMeditation()],
        },
      }
    })
    builder.addCase(onSaveStory.rejected, (state, { error }) => {
      state.form.loading = false
      state.form.success = false
      state.form.error = error.message as string
    })
  },
})

export const { onEdit, onMeditationAdd, onMeditationRemove, onMeditationChange, onReset } = slice.actions

export default slice.reducer
