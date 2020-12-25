import {
  NavigationMenuItemProps,
  NavigationMenuProps,
} from '../components/navigation-menu'

export default [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Serviços',
    menuItemLinks: [
      {
        name: 'Monitoramento e Checagem',
        href: '/monitoramento-e-checagem',
      },
      {
        name: 'Apoio à Capacitação',
        href: '/apoio-a-capacitacao',
      },
    ],
  } as NavigationMenuProps,
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
