import { links } from '@assets/portfolio/links'

import { AssetsImage } from 'components/AssetsImage'

export const DesktopPresentation = () => {
  return (
    <div className="mx-auto mb-4 grid h-full max-h-[596px] w-full max-w-[559px] grid-cols-layout grid-rows-layout gap-4 grid-areas-layout">
      <div className="grid-in-p1">
        <a href={links.unx} target="_blank">
          <AssetsImage
            src="unxImg"
            alt="projeto unx"
            className="h-[290px] w-[175px] rounded-lg border border-gray-600"
            objectFit="cover"
          />
        </a>
      </div>
      <div className="grid-in-p2">
        <a href={links.trainer} target="_blank">
          <AssetsImage
            src="trainerImg"
            alt="projeto trainer"
            className="h-[140px] w-[366px] rounded-lg border border-gray-600"
            objectFit="cover"
          />
        </a>
      </div>
      <div className="grid-in-p3">
        <a href={links.proffy} target="_blank">
          <AssetsImage
            src="proffyImg"
            alt="projeto proffy"
            className="h-[135px] w-[177px] rounded-lg border border-gray-600"
            objectFit="cover"
          />
        </a>
      </div>
      <div className=" grid-in-p4">
        <a href={links.worldTrip} target="_blank">
          <AssetsImage
            src="worldTripImg"
            alt="projeto world trip"
            className="h-[289px] w-[173px] rounded-lg border border-gray-600"
            objectFit="cover"
          />
        </a>
      </div>
      <div className=" grid-in-p5">
        <a href={links.staem} target="_blank">
          <AssetsImage
            src="staemImg"
            alt="projeto staem"
            className="h-[289px] w-[368px] rounded-lg border border-gray-600"
            objectFit="cover"
          />
        </a>
      </div>
      <div className="grid-in-p6">
        <a href={links.invision} target="_blank">
          <AssetsImage
            src="invisionImg"
            alt="projeto invision"
            className="h-[137px] w-[177px] rounded-lg border border-gray-600"
            objectFit="cover"
          />
        </a>
      </div>
    </div>
  )
}
