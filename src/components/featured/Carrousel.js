import React from 'react';
import Slider from 'react-slick';

import slide_1 from '../../resources/images/slide_1.jpg';
import slide_2 from '../../resources/images/slide_2.jpg';
import slide_3 from '../../resources/images/slide_3.jpg';
import slide_4 from '../../resources/images/slide_4.jpg';

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  const images = [slide_1, slide_2, slide_3, slide_4];

  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: 'hidden', height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        {images.map(image => {
          return (
            <div>
              <div
                className="carrousel_image"
                style={{
                  background: `url(${image})`,
                  height: `${window.innerHeight}px`
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carrousel;
