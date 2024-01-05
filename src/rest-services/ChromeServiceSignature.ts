import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export namespace ChromeServiceSignature {
  export namespace GetPages {
    export const path = 'get-pages'
    export interface Request {}
    export interface Response {
      readonly pages: readonly Model.Page[]
    }
  }

  export namespace CreateCard {
    export const path = 'create-card'
    export interface Request {
      readonly pageId: Id
      readonly cardText: string
      readonly source: {
        readonly url: string
        readonly title?: string
        readonly favIconUrl?: string
      }
    }
  }
}
