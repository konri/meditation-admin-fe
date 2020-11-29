import { AuthResponse } from '../../shared/model/response/AuthResponse'
import history from '../../shared/settings/history'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Auth } from '../../shared/settings/endpoints'
import RouteEnum from '../../view/router/RouteEnum'
import { deleteUserFromCache, parseResponseToPayload, saveUserToCache } from './authService'
import { UserDetails } from '../../shared/model/UserDetails'
import { LoginFormData } from '../../view/pages/LoginPage/LoginFormData'

export enum AuthActionTypes {
  LOGIN_REGISTER_REQUEST_START = 'LOGIN_REGISTER_REQUEST_START',
  LOGIN_REGISTER_SUCCESSFUL = 'LOGIN_REGISTER_SUCCESSFUL',
  LOGIN_REGISTER_FAILED = 'LOGIN_REGISTER_FAILED',
  LOGIN_REGISTER_CLEAR = 'LOGIN_REGISTER_CLEAR',
  LOGOUT = 'LOGOUT',
}

export interface AuthSuccessPayload {
  user: UserDetails
  token: string
}

export const LoginRequest = (loginRequest: LoginFormData) => async (dispatch: any) => {
  dispatch({
    type: AuthActionTypes.LOGIN_REGISTER_REQUEST_START,
  })

  try {
    const { data } = await axios.post<FormData, AxiosResponse<AuthResponse>>(Auth.login, loginRequest)
    const authSuccessPayload = parseResponseToPayload(data)
    saveUserToCache(authSuccessPayload)

    dispatch(success(authSuccessPayload))

    history.push(RouteEnum.Dashboard)
  } catch (error) {
    const { response } = error as AxiosError
    dispatch({
      type: AuthActionTypes.LOGIN_REGISTER_FAILED,
      payload: response?.status,
    })
  }
}

export const Logout = () => (dispatch: any) => {
  deleteUserFromCache()
  dispatch({ type: AuthActionTypes.LOGOUT })
}

function success(
  payload: AuthSuccessPayload
): { type: AuthActionTypes.LOGIN_REGISTER_SUCCESSFUL; payload: AuthSuccessPayload } {
  return {
    type: AuthActionTypes.LOGIN_REGISTER_SUCCESSFUL,
    payload,
  }
}
