import { render, screen } from '@testing-library/react'

import { Header } from '.'

describe('<Header />', () => {
  it('should render the Header', () => {
    const { container } = render(<Header />)

    expect(screen.getByText('ALFREDO')).toBeInTheDocument()
    expect(screen.getByText('TS')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
