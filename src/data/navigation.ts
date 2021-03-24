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
    name: 'Prod. e Serviços',
    menuItemLinks: [
      {
        name: 'Painel privado',
        href: 'http://admin.projetoconfia.info/',
        target: '_blank',
      },
      {
        name: 'Monitoramento de notícias',
        href: '/produtos-e-servicos/monitoramento-de-noticias',
      },
      {
        name: 'Apoia a capacitação',
        href:
          '/produtos-e-servicos/apoio-a-capacitacao-na-identificacao-de-fake-news',
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
