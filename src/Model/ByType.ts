import { Type } from './Type'
import { Account } from './models/Account'
import { Page } from './models/Page'
import { User } from './models/User'

export type ByType<T extends Type = Type> = {
  [Type.Account]: Account
  [Type.User]: User
  [Type.Page]: Page
}[T]
