import { render, screen } from '@testing-library/react'

import { SectionTeamProps } from '@/types'
import SectionTeam from '.'

const DEFAULT_PROPS: SectionTeamProps = {
  title: 'Equipe',
  members: [
    {
      name: 'Fulano da Silva',
      role: 'Desenvolvedor',
      photo: {
        url: 'https://localhost/uploads/logo_gh.svg',
        alternativeText: 'Logo',
      },
      socialNetworkLinks: null,
    },
  ],
}

describe('<SectionTeam />', () => {
  it('should render title', () => {
    render(<SectionTeam {...DEFAULT_PROPS} />)
    expect(
      screen.getByRole('heading', { name: DEFAULT_PROPS.title })
    ).toBeInTheDocument()
  })
})
