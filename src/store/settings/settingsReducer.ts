import { SettingsState } from './model/SettingsState'
import { getSettingsInitialState } from './settingsService'
import { Action } from '../Action'
import { SettingsActionsEnum } from './settingsActions'

const INITIAL_STATE: SettingsState = getSettingsInitialState()

function settingsReducer(state = INITIAL_STATE, action: Action<SettingsActionsEnum, boolean>) {
  switch (action.type) {
    case SettingsActionsEnum.TOGGLE_DARK_MODE: {
      return {
        ...state,
        darkMode: action.payload,
      }
    }
    default:
      return state
  }
}

export default settingsReducer
