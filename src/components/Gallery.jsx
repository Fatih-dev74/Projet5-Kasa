import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import data from '../datas/apartments.json';

const Gallery = () => {

    return (
        <div className='gallery'>
            {data.map((apartment) =>(
                <div key={apartment.id} className='gallery__item'>
                    <Link to={`/appartement/${apartment.id}`}>
                        <Card key={apartment.id} caption={apartment.title} image={apartment.cover} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Gallery;