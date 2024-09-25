import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/apartments.json';
import NotFound from '../pages/NotFound';

const Tags = () => {

    const { id } = useParams();
    const tagsData = data.find((data) => data.id === id);

    if (!tagsData) {
        return <NotFound />
    }

    return (
        <div className='tags'>
             {tagsData.tags.map((tag, index) => (
                <div className='tags__item' key={index}>{tag}
                </div>
            ))}
        </div>
    );
};

export default Tags;