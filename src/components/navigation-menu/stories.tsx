import { Meta, Story } from '@storybook/react/types-6-0'

import NavigationMenu, { NavigationMenuProps } from '.'

export default {
  title: 'NavigationMenu',
  component: NavigationMenu,
  argTypes: {
    name: { control: 'text' },
    menuItemLinks: {
      control: 'object',
      description: 'Array of object menuItemLink',
      expanded: true,
    },
  },
} as Meta

export const Basic: Story = (
  args: Partial<NavigationMenuProps> | undefined
) => <NavigationMenu {...(args as NavigationMenuProps)} />

Basic.args = {
  menuItens: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Serviços',
      menuItemLinks: [
        {
          name: 'Serviço A',
          href: '/servico-a',
        },
        {
          name: 'Serviço B',
          href: '/servico-b',
        },
      ],
    } as NavigationMenuProps,
    {
      name: 'Eventos',
      href: '/eventos',
    },
  ],
} as NavigationMenuProps
