import { StatisticDataProps } from '@/types'
import { Meta, Story } from '@storybook/react/types-6-0'

import StatisticDataCountCard from '.'

export default {
  title: 'StatisticDataCountCard',
  component: StatisticDataCountCard,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    count: { control: 'number' },
  },
} as Meta

export const Basic: Story = (args: Partial<StatisticDataProps> | undefined) => (
  <StatisticDataCountCard {...(args as StatisticDataProps)} />
)

Basic.args = {
  title: 'Notícias revisadas',
  count: 57895,
} as StatisticDataProps

export const WithSubtitle: Story = (
  args: Partial<StatisticDataProps> | undefined
) => <StatisticDataCountCard {...(args as StatisticDataProps)} />

WithSubtitle.args = {
  title: 'Notícias revisadas',
  subtitle: 'Total de notícias suspeitas revisadas pelo confia',
  count: 57895,
} as StatisticDataProps
