import { ImageProps } from './image'
import { Nullable } from './nullable'
import { SocialNetworkLinkProps } from './socialNetworkLink'

export type MemberProps = {
  id: string
  name: string
  role: string
  description: string
  photo: ImageProps
  socialNetworkLinks: Nullable<SocialNetworkLinkProps[]>
}
