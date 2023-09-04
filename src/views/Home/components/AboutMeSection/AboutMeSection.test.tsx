import { render, screen } from '@testing-library/react'

import { AboutMeSection } from '.'

describe('<AboutMeSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<AboutMeSection />)

    expect(
      screen.getByRole('heading', { name: /AboutMeSection/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
