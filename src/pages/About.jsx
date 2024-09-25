import React from "react";
import Banner from "../components/Banner"
import BannerImg from "../assets/images/paysage-montagne.webp";
import Collapse from "../components/Collapse";
import data from "../datas/aboutList.json";

const About = () => {
    return (
        <div>
            <Banner img={BannerImg} alt="Paysage de montagnes"></Banner>
            <div className="aboutCollapse">
                {data.map(item => (
                    <Collapse key={item.title} title={item.title} children={item.description}/>
                ))}
            </div>
        </div>
    );
};

export default About;