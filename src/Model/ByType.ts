import { Type } from './Type'
import { Account } from './models/Account'
import { Page } from './models/Page'

export type ByType<T extends Type = Type> = {
  [Type.Account]: Account
  [Type.Page]: Page
}[T]
