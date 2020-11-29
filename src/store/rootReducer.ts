import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import AuthState from './auth/model/AuthState'
import { SettingsState } from './settings/model/SettingsState'
import settingsReducer from './settings/settingsReducer'

export interface Store {
  auth: AuthState
  settings: SettingsState
}

export default combineReducers<Store>({
  auth: authReducer,
  settings: settingsReducer,
})
