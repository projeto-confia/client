import { ProcessStepProps } from '@/types'
import { Meta, Story } from '@storybook/react/types-6-0'

import ProcessStep from '.'

export default {
  title: 'ProcessStep',
  component: ProcessStep,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta

export const Basic: Story = (args: Partial<ProcessStepProps> | undefined) => (
  <ProcessStep {...(args as ProcessStepProps)} />
)

Basic.args = {
  label: 'Step 1',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
  icon: {
    url: '/uploads/logo_gh_6679cd4dc2.svg',
    alternativeText: 'image not found',
  },
} as ProcessStepProps
