import { render } from '@testing-library/react'
import perfilImage from 'assets/perfil.png'

import { NextImage } from '.'

describe('<NextImage />', () => {
  it('should render the NextImage', async () => {
    const { container } = render(<NextImage src={perfilImage} alt="" />)

    // const element = await screen.findByRole('img')

    // expect(element.getAttribute('src')).toEqual(perfilImage.src)

    expect(container.firstChild).toMatchSnapshot()
  })
})
