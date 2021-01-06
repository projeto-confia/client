import { Meta, Story } from '@storybook/react/types-6-0'
import { MemberProps } from '../../types/member'

import Member from '.'

export default {
  title: 'Member',
  component: Member,
  argTypes: {
    name: { control: 'text' },
    photo: { control: 'text', description: 'Path to file' },
    socialNetworkLink: {
      control: 'object',
      description: 'Array of object with prop socialNetwork and url',
      expanded: true,
    },
  },
} as Meta

export const Basic: Story = (args: Partial<MemberProps> | undefined) => (
  <Member {...(args as MemberProps)} />
)

Basic.args = {
  name: 'Fulano da Silva',
  photo: {
    url:
      'https://icon-library.com/images/woman-profile-icon/woman-profile-icon-23.jpg',
    alternativeText: 'Logo do confia',
  },
  role: 'Desenvolvedor',
  socialNetworkLinks: [
    {
      socialNetwork: 'GitHub',
      url: 'https://github/fulano',
    },
    {
      socialNetwork: 'Facebook',
      url: 'https://facebook/fulano',
    },
    {
      socialNetwork: 'LinkedIn',
      url: 'https://linkedIn/fulano',
    },
    {
      socialNetwork: 'Lattes',
      url: 'https://lattes/fulano',
    },
  ],
} as MemberProps

export const WithoutSocialNetwork: Story = (
  args: Partial<MemberProps> | undefined
) => <Member {...(args as MemberProps)} />

WithoutSocialNetwork.args = {
  id: '1',
  description: 'Random description',
  name: 'Fulanoda Silva',
  photo: {
    alternativeText: 'some altervatives',
    url: 'test',
  },
  role: 'Developer',
  socialNetworkLinks: [],
} as MemberProps
