import { UserDetails } from '../../../shared/model/UserDetails'

export default interface AuthState {
  user: UserDetails | null
  token: string | null
  loading: boolean
  error: string | null
}
