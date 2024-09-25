import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/apartments.json';
import NotFound from '../pages/NotFound';

const Host = () => {

    const { id } = useParams();
    const hostData = data.find((data) => data.id === id);

    if (!hostData) {
        return <NotFound />
    }

    return (
        <div className='host'> 
            <div className='host__name'>{hostData.host.name}</div>
            <img className='host__img'src={hostData.host.picture} alt={hostData.host.name}></img>
         </div>
        
    );
};

export default Host;