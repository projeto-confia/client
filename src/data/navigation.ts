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
        name: 'JED',
        href: '/subprojetos/jed',
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
        name: 'Monitoramento de notícias',
        href: '/produtos-e-servicos/monitoramento-de-noticias',
      },
      {
        name: 'Apoia à capacitação',
        href:
          '/produtos-e-servicos/apoio-a-capacitacao-na-identificacao-de-fake-news',
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
