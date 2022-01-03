import AuthState from './model/AuthState'
import { AuthResponse, Token } from '../../shared/model/response/AuthResponse'
import { AuthSuccessPayload } from './authActions'
import axios, { AxiosRequestConfig } from 'axios'

const CACHED_USER_ID = 'u$er_details'

let token: string

export function getInitialState(): AuthState {
  const cachedUser = localStorage.getItem(CACHED_USER_ID)
  if (cachedUser) {
    const { user, token } = JSON.parse(cachedUser) as AuthSuccessPayload
    return {
      user,
      token,
      loading: false,
      error: null,
    }
  }
  return {
    user: null,
    token: null,
    loading: false,
    error: null,
  }
}

export function parseResponseToPayload(authRes: AuthResponse): AuthSuccessPayload {
  const { user, token } = authRes
  return {
    user,
    token: _parseToken(token),
  }
}

export function saveUserToCache(userCached: AuthSuccessPayload) {
  localStorage.setItem(CACHED_USER_ID, JSON.stringify(userCached))
}

export function getToken(): string | null {
  if (token) {
    return token
  }
  const cachedUser = localStorage.getItem(CACHED_USER_ID)
  if (cachedUser) {
    const userDetails: AuthSuccessPayload = JSON.parse(cachedUser)
    token = userDetails.token
    return token
  }
  return null
}

export function deleteUserFromCache() {
  localStorage.removeItem(CACHED_USER_ID)
}

export function removeTokenToAxios() {
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers.Authorization = null
    return config
  })
}

function _parseToken(token: Token) {
  return `${token.type} ${token.access_token}`
}
