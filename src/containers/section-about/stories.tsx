import { SectionAboutProps } from '@/types'
import { Meta, Story } from '@storybook/react/types-6-0'

import SectionAbout from '.'

export default {
  title: 'SectionAbout',
  component: SectionAbout,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta

export const Basic: Story = (args: Partial<SectionAboutProps> | undefined) => (
  <SectionAbout {...(args as SectionAboutProps)} />
)

Basic.args = {
  title: 'Sobre',
  subtitle: 'Quem somos e nossa missão',
  description:
    '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi ores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi </p>',
  image: {
    url: '/uploads/logo_gh.svg',
    alternativeText: 'image not found',
  },
} as SectionAboutProps
