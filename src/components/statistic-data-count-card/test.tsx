import { render, screen } from '@testing-library/react'
import { StatisticDataProps } from '../../types/index'

import StatisticDataCountCard from '.'

const DEFAULT_PROPS: StatisticDataProps = {
  title: 'Notícias revisadas',
  subtitle: 'Total de notícias suspeitas revisadas pelo confia',
  count: 57895,
}

describe('<StatisticDataCountCard />', () => {
  it('should render title', () => {
    const { container } = render(<StatisticDataCountCard {...DEFAULT_PROPS} />)

    expect(
      screen.getByRole('heading', { name: DEFAULT_PROPS.title })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render subtitle', () => {
    render(<StatisticDataCountCard {...DEFAULT_PROPS} />)
    expect(screen.getByText(DEFAULT_PROPS.subtitle)).toBeInTheDocument()
  })

  it('should render count with locale strint pt-BR', () => {
    render(<StatisticDataCountCard {...DEFAULT_PROPS} />)
    expect(
      screen.getByText(DEFAULT_PROPS.count.toLocaleString('pt-BR'))
    ).toBeInTheDocument()
  })
})
