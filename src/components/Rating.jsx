import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
    const stars = Array.from({length: 5}).map((_, index)=> (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      color={index < rating ? '#FF6060' : '#E0E0E0'}
    />
  ));

  return <div className='rating'>{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;