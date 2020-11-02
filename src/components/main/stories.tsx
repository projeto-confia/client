import { Meta, Story } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: { control: 'text' },
  },
} as Meta

export const Basic: Story = () => <Main />
