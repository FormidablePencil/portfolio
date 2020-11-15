import React, { memo, Suspense } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = React.lazy(() => import("react-slick"))
const MemoizedSlider = memo(Slider)

interface T {
  contentStyles: { imagesStyles: string, swipeableContainerStyles: string },
  images,
  showMobileImages,
  autoPlay
}
function SwipableImages(props) {
  const { contentStyles, images, showMobileImages, autoPlay }: T = props
  // const classes = useStyles();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: autoPlay ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const ImageComp = ({ imageProps }) =>
    <img
      key={imageProps.url}
      className={contentStyles.imagesStyles}
      src={images && imageProps.url}
      alt='application' />

  if (!images)
    return null
  return (
    <>
      {/* <NavBtn isMobile={true} next={true} /> */}
      <div className={contentStyles.swipeableContainerStyles}>
        <Suspense fallback={<div>kayy</div>}>
          <MemoizedSlider {...settings}>
            {images.map(imageProps => {
              switch (true) {
                case imageProps.device === 'mobile' && showMobileImages:
                case imageProps.device === 'web' && !showMobileImages:
                  return <>
                    <ImageComp key={imageProps} imageProps={imageProps} />
                  </>
                default:
                  return null
              }
            })}
          </MemoizedSlider>
        </Suspense>
      </div>
    </>
  )
}

export default SwipableImages
