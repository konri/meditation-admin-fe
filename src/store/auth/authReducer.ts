import AuthState from './model/AuthState'
import { AuthActionTypes } from './authActions'
import { Action } from '../Action'
import { AuthResponse } from '../../shared/model/response/AuthResponse'
import { getInitialState } from './authService'

const INITIAL_STATE: AuthState = getInitialState()

function authReducer(state = INITIAL_STATE, action: Action<AuthActionTypes, AuthResponse | any>): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REGISTER_REQUEST_START: {
      return {
        user: null,
        token: null,
        loading: true,
        error: null,
      }
    }
    case AuthActionTypes.LOGIN_REGISTER_SUCCESSFUL: {
      return {
        ...action.payload,
        loading: false,
        error: null,
      }
    }
    case AuthActionTypes.LOGIN_REGISTER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case AuthActionTypes.LOGOUT:
    case AuthActionTypes.LOGIN_REGISTER_CLEAR: {
      return {
        user: null,
        token: null,
        loading: false,
        error: null,
      }
    }
    default:
      return state
  }
}

export default authReducer
