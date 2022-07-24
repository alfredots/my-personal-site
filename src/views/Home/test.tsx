import { render, screen } from '@testing-library/react'
import { Home } from '.'

describe('<Main />', () => {
  it('sould render the heading', () => {
    const { container } = render(<Home />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
