import { useState, useRef } from "react"
import { useSpring, useChain } from "react-spring"
import { viewingOnMobileDimensions } from "../components/landingPageComps/Intro"



function useDeviceTypeViewing() {
  const [isMobile, setIsMobile] = useState(viewingOnMobileDimensions().height ? true : false)

  const changeDeviceType = () => setIsMobile(prev => !prev)
  const desktopAnim = useRef(null)
  const deviceTypeMobileTranstionAnim = useSpring({
    ref: desktopAnim,
    to: isMobile ? {
      transform: 'translate(0px) scale(1.2)', //* change the max-height
      opacity: 1,
    } : {
        transform: 'translate(100px) scale(1)',
        opacity: 0,
      },
    from: { opacity: 1, transform: 'translate(100px)  scale(1)', }
  })

  const mobileAnim = useRef(null)
  const deviceTypeDesktopTranstionAnim = useSpring({
    ref: mobileAnim,
    to: !isMobile ? {
      transform: 'translate(0px) scale(1.2)', //* change dimensions to fit mobile view
      opacity: 1,
    } : {
        transform: 'translate(-100px) scale(1)',
        opacity: 0,
      },
    from: { opacity: 1, transform: 'translate(-100px)  scale(1)', }
  })

  useChain(isMobile ? [mobileAnim, desktopAnim] : [desktopAnim, mobileAnim], [0, 0.4])

  return {
    isMobile, changeDeviceType,
    deviceTypeMobileTranstionAnim, deviceTypeDesktopTranstionAnim
  }

}

export default useDeviceTypeViewing
