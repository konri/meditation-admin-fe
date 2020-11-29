import { UserRoles } from './UserRoles'

export interface UserDetails {
  userName: string
  lastName: string
  email: string
  imageUrl: string
  role: UserRoles
  profileCompleted: boolean
}
