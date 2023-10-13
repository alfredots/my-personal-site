import Slider, { Settings } from 'react-slick'

import { links } from 'assets/portfolio/links'

import { AssetsImage } from 'components/AssetsImage'
import { Title } from 'components/Title'

export const MobilePresentation = () => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Slider className="mb-4 w-full" {...settings}>
      <div>
        <div className="flex flex-col items-center gap-4 px-2">
          <Title>STAEM</Title>
          <a href={links.staem} target="_blank">
            <AssetsImage
              src="staemImg"
              alt="projeto staem"
              className="h-[180px] w-[320px] rounded-lg"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-4">
          <Title>Personal Trainer</Title>
          <a href={links.trainer} target="_blank">
            <AssetsImage
              src="trainerImg"
              alt="projeto trainer"
              className="h-[180px] w-[320px] rounded-lg"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-4">
          <Title>UNX</Title>
          <a href={links.unx} target="_blank">
            <AssetsImage
              src="unxImg"
              alt="projeto unx"
              className="h-[180px] w-[320px] rounded-lg"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-4">
          <Title>Invision Login Screen</Title>
          <a href={links.invision} target="_blank">
            <AssetsImage
              src="invisionImg"
              alt="projeto invision login screen"
              className="h-[180px] w-[320px] rounded-lg"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-4">
          <Title>Proffy</Title>
          <a href={links.proffy} target="_blank">
            <AssetsImage
              src="proffyImg"
              alt="projeto proffy"
              className="h-[180px] w-[320px] rounded-lg"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-4">
          <Title>World Trip</Title>
          <a href={links.worldTrip} target="_blank">
            <AssetsImage
              src="worldTripImg"
              alt="projeto world trip"
              className="h-[180px] w-[320px] rounded-lg"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
    </Slider>
  )
}
