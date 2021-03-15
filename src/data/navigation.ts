import { SubMenuProps } from '../components/sub-menu'
import { NavigationMenuItemProps } from '../components/navigation-menu'

export default [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Subprojetos',
    menuItemLinks: [
      {
        name: 'AUTOMATA',
        href: '/subprojetos/automata',
      },
      {
        name: 'JED',
        href: '/subprojetos/jed',
      },
    ],
    placement: 'bottom',
  } as SubMenuProps,
  {
    name: 'Colaboradores',
    href: '/colaboradores',
  },
  {
    name: 'Publicações',
    href: '/publicacoes',
  },
  {
    name: 'Eventos',
    href: '/eventos',
  },
  {
    name: 'Links',
    href: '/links',
  },
  {
    name: 'Instituições',
    href: '/instituicoes',
  },
  {
    name: 'Patrocinadores',
    href: '/patrocinadores',
  },
  {
    name: 'Contatos',
    href: '/contatos',
  },
] as NavigationMenuItemProps[]
