import React from 'react';
import PropTypes from 'prop-types';

const Card = ({image, caption}) => {
    return (
        <div>
            <img className='gallery__img' src={image} alt={caption} />
            <h2 className='gallery__caption'>{caption}</h2>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
};

export default Card;