import { UserDetails } from '../UserDetails'

export interface Token {
  access_token: string
  type: string
}

export interface AuthResponse {
  token: Token
  user: UserDetails
}
