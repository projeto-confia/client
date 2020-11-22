import { SectionTeamProps } from '@/types'
import { Meta, Story } from '@storybook/react/types-6-0'

import SectionTeam from '.'

export default {
  title: 'SectionTeam',
  component: SectionTeam,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta

export const Basic: Story = (args: Partial<SectionTeamProps> | undefined) => (
  <SectionTeam {...(args as SectionTeamProps)} />
)

Basic.args = {
  title: 'Equipe',
} as SectionTeamProps
