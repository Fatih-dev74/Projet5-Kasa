import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/apartments.json';
import NotFound from '../pages/NotFound';

const DescriptionApart = () => {

    const { id  } = useParams();
    const descriptionData = data.find((data) => data.id === id);

    if (!descriptionData) {
        return <NotFound />
    }

    return (
        <div>
            {descriptionData.description}
        </div>
    );
};

export default DescriptionApart;