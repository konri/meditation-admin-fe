import axios from 'axios'
import { Logout } from '../../store/auth/authActions'
import { toast } from 'react-toastify'
import { Auth } from './endpoints'
import { Store } from '../../store/rootReducer'
import { APP_CONFIG } from '../../config'

axios.defaults.baseURL = APP_CONFIG.API
const setupAxiosInterceptors = (store: any) => {
  const { dispatch } = store
  axios.interceptors.request.use(function (config) {
    const token = (store.getState() as Store).auth.token
    config.headers.Authorization = token
    return config
  })

  const onResponseSuccess = (response: any) => response
  const onResponseError = (err: any) => {
    const status = err.status || (err.response ? err.response.status : 0)
    if (status === 401 && !err.response.config.url.includes(Auth.login)) {
      toast.error('Your token was expired. Please login again to system.')
      dispatch(Logout())
    }
    return Promise.reject(err)
  }
  axios.interceptors.response.use(onResponseSuccess, onResponseError)
}

export default setupAxiosInterceptors
