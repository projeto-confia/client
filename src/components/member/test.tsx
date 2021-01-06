import { render, screen } from '@testing-library/react'
import { MemberProps } from '../../types/member'

import Member from '.'

const DEFAULT_PROPS: MemberProps = {
  id: '1',
  name: 'Fulano da Silva',
  description: 'Some description',
  photo: {
    url: 'https://localhost/images/logo_gh.svg',
    alternativeText: 'Logo do confia',
  },
  role: 'Desenvolvedor',
  socialNetworkLinks: [
    {
      socialNetwork: 'GitHub',
      url: 'https://github/fulano',
    },
    {
      socialNetwork: 'Facebook',
      url: 'https://facebook/fulano',
    },
    {
      socialNetwork: 'LinkedIn',
      url: 'https://linkedIn/fulano',
    },
    {
      socialNetwork: 'Lattes',
      url: 'https://lattes/fulano',
    },
  ],
}

describe('<Member />', () => {
  it('should render name', () => {
    render(<Member {...DEFAULT_PROPS} />)
    expect(
      screen.getByRole('heading', { name: DEFAULT_PROPS.name })
    ).toBeInTheDocument()
  })
})
