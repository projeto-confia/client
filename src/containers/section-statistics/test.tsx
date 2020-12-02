import { render, screen } from '@testing-library/react'
import { SectionStatisticsProps } from '../../types/index'

import SectionStatistics from '.'

const DEFAULT_PROPS: SectionStatisticsProps = {
  statisticDatas: [
    {
      title: 'Notícias revisadas',
      subtitle: 'Total de notícias suspeitas revisadas pelo confia',
      count: 57895,
    },
    {
      title: 'Enviadas para agências de checagem',
      subtitle: '',
      count: 22300,
    },
    {
      title: 'Fake news encontradas',
      subtitle:
        'Total de fake news encontradas e confirmadas pelas agências de checagem',
      count: 2400,
    },
  ],
}

describe('<SectionStatistics />', () => {
  it('should render all statisticData', () => {
    const { container } = render(<SectionStatistics {...DEFAULT_PROPS} />)

    expect(screen.getAllByRole('heading')).toHaveLength(3)

    expect(container.firstChild).toMatchSnapshot()
  })
})
