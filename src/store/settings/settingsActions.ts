import { deleteUserFromCache } from '../auth/authService'
import { saveDarkMode } from './settingsService'

export enum SettingsActionsEnum {
  TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
}

export const toggleDarkMode = (mode: boolean) => (dispatch: any) => {
  dispatch({ type: SettingsActionsEnum.TOGGLE_DARK_MODE, payload: mode })
  saveDarkMode(mode)
}
