import React from "react";
import { useParams } from "react-router-dom";
import data from "../datas/apartments.json";
import NotFound from "../pages/NotFound";

const EquipmentsApart = () => {
    const {id} = useParams();
    const equipmentsData = data.find((data) => data.id === id);
    const equipments = equipmentsData.equipments;

    if (!equipmentsData) {
        return <NotFound/>;
    }

    const equipmentsList = equipments.map((index) => 
        <p key={index}>{index}</p>
    )

    return (
        <div>
            {equipmentsList}
        </div>
    );
};

export default EquipmentsApart;