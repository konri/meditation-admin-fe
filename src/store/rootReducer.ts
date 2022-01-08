import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import AuthState from './auth/model/AuthState'
import { SettingsState } from './settings/model/SettingsState'
import settingsReducer from './settings/settingsReducer'
import createStoryReducer, { CreateStoryState } from './createStory/createStory.slice'

export interface Store {
  auth: AuthState
  settings: SettingsState
  createStory: CreateStoryState
}

export default combineReducers<Store>({
  auth: authReducer,
  settings: settingsReducer,
  createStory: createStoryReducer,
})
