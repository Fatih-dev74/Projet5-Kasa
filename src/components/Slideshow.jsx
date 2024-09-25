import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  if (images.length === 1) {
    return (
      <div className="slideshow">
        <img src={images[0]} alt={`slide 1`} className="slideshow__image" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <FontAwesomeIcon icon={faChevronLeft} className="arrow arrow__left" onClick={prevSlide}
      />
      <div className="slideshow__container">
        <img src={images[currentIndex]} alt={`slide ${currentIndex + 1}`} className="slideshow__image"
        />
        <div className="slideshow__number">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="arrow arrow__right" onClick={nextSlide}
      />
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;