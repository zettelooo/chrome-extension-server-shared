import { Type } from '../Type'

export interface Account {
  readonly type: Type.Account
  readonly subscription: Account.Subscription
  readonly name: string
  readonly userName: string
  readonly email: string
  readonly avatarFileUrl: string | null
  readonly color: string
}

export namespace Account {
  export type Subscription = 'none' | 'normal' | 'canceled'
}
