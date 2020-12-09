import { Meta, Story } from '@storybook/react/types-6-0'

import SubMenu, { SubMenuProps } from '.'

export default {
  title: 'SubMenu',
  component: SubMenu,
  argTypes: {
    name: { control: 'text' },
    menuItemLinks: {
      control: 'object',
      description: 'Array of object menuItemLink',
      expanded: true,
    },
  },
} as Meta

export const Basic: Story = (args: Partial<SubMenuProps> | undefined) => (
  <SubMenu {...(args as SubMenuProps)} />
)

Basic.args = {
  name: 'Serviços',
  menuItemLinks: [
    {
      href: '#menuA',
      onClick: () => null,
      name: 'Serviço de apoio a combate a Fake News',
      color: 'primary',
    },
    {
      href: '#menuB',
      onClick: () => null,
      name: 'Serviço de monitoramento',
      color: 'primary',
    },
  ],
} as SubMenuProps

export const WithDifferentColor: Story = (
  args: Partial<SubMenuProps> | undefined
) => <SubMenu {...(args as SubMenuProps)} />

WithDifferentColor.args = {
  name: 'Serviços cores diferentes',
  color: 'secondary',
  menuItemLinks: [
    {
      href: '#menuA',
      onClick: () => null,
      name: 'Serviço de apoio a combate a Fake News',
      color: 'secondary',
    },
    {
      href: '#menuB',
      onClick: () => null,
      name: 'Serviço de monitoramento',
      color: 'secondary',
    },
  ],
} as SubMenuProps
