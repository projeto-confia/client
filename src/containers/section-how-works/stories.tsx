import { SectionHowWorksProps } from '@/types'
import { Meta, Story } from '@storybook/react/types-6-0'

import SectionHowWorks from '.'

export default {
  title: 'SectionHowWorks',
  component: SectionHowWorks,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta

export const Basic: Story = (
  args: Partial<SectionHowWorksProps> | undefined
) => <SectionHowWorks {...(args as SectionHowWorksProps)} />

Basic.args = {
  title: 'Como Funciona',
  processSteps: [
    {
      label: 'Step 1',
      description:
        '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>',
      icon: {
        url: '/uploads/logo_gh_6679cd4dc2.svg',
        alternativeText: 'image not found',
      },
    },
    {
      label: 'Step 2',
      description:
        '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>',
      icon: {
        url: '/uploads/logo_gh_6679cd4dc2.svg',
        alternativeText: 'image not found',
      },
    },
  ],
} as SectionHowWorksProps
