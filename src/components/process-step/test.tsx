import { render, screen } from '@testing-library/react'
import { ProcessStepProps } from '../../types/index'

import ProcessStep from '.'

const DEFAULT_PROPS: ProcessStepProps = {
  label: 'Step 01',
  description: '<p>Some very descriptive description</p>',
  icon: {
    url: '/image.png',
    alternativeText: 'A not found image',
  },
}

describe('<ProcessStep />', () => {
  it('should render', () => {
    const { container } = render(<ProcessStep {...DEFAULT_PROPS} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render heading label', () => {
    render(<ProcessStep {...DEFAULT_PROPS} />)

    expect(
      screen.getByRole('heading', { name: DEFAULT_PROPS.label })
    ).toBeInTheDocument()
  })
})
