import { useSpring, config } from "react-spring"
import { customAnimConfig } from '../staticData'

const { innerWidth } = window

//! refactor to css media query
export const viewingOnMobileDimensions = (stylesIfNotMobile?: {}, overrideMobileStyles?: any): any => {
  const { innerWidth, innerHeight } = window
  return innerWidth < 800 ? overrideMobileStyles ?? { height: innerHeight } : stylesIfNotMobile ?? {}
}

const useIntroBanner = () => {
  const propsBannerAnim = useSpring({
    from: { opacity: innerWidth < 500 ? 1 : 0, },
    to: { opacity: 1, },
    config: config.default,
    delay: 1000
  })
  const propsParagraphAnim = useSpring({
    from: innerWidth < 500 ? { opacity: 1, transform: 'translateY(0px)' } : { opacity: 0, transform: 'translateY(-60px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: customAnimConfig,
    delay: 1400
  })

  return { propsBannerAnim, propsParagraphAnim }
}

export default useIntroBanner
