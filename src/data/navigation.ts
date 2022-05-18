import { NavigationMenuItemProps, SubMenuProps } from '@/types'

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
        name: 'JEDi',
        href: '/subprojetos/jedi',
      },
    ],
    placement: 'bottom',
  } as SubMenuProps,
  {
    name: 'Produtos e Serviços',
    menuItemLinks: [
      {
        name: 'Painel privado',
        href: 'http://admin.projetoconfia.info/',
        target: '_blank',
      },
      {
        name: 'Jogo da trilha',
        href: 'http://memore-net.com/jogos/trilha/',
        target: '_blank',
      },
    ],
    placement: 'bottom',
  } as SubMenuProps,
  {
    name: 'Fake News detectadas',
    href: '/listagem-notificacoes-fake-news/1',
  },
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
    href: '/listagem-eventos/1',
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
