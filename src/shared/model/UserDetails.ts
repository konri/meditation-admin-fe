import { UserRoles } from './UserRoles'

export interface UserDetails {
  name: string
  firstName: string
  secondName: string
  email: string
  picture: string
  role: UserRoles
}
