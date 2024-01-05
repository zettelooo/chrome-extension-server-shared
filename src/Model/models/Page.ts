import { Base } from '../Base'
import { Type } from '../Type'

export interface Page extends Base {
  readonly type: Type.Page
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly avatarFileUrl: string | null
  readonly color: string
}
