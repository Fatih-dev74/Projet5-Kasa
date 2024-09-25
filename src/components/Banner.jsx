import React from "react";

const Banner = ({img, alt, txt1, txt2}) => {
    return (
        <div className="banner">
            <div className="banner__img">
                <img src={img} alt={alt}/>
            </div>
            <div className="banner__text">
                <p className="banner__text--p1">{txt1}</p>
                <p className="banner__text--p2">{txt2}</p>
            </div>
        </div>
    );
};

export default Banner;