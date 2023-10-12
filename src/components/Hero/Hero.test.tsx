import { render, screen } from '@testing-library/react'

import { Hero } from '.'

describe('<Hero />', () => {
  it('should render the Hero', () => {
    const texts = [
      'Alfredo',
      ' - Full Frontend Developer and South Korean culture enthusiast.'
    ]

    const { container } = render(<Hero />)

    texts.map((text) => expect(screen.getByText(text)).toBeInTheDocument())

    expect(container.firstChild).toMatchSnapshot()
  })
})
