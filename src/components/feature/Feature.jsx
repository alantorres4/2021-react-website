import React from 'react';
import './feature.css';

const Feature = ({ aboveTitle, title, text, link }) => {
    return (
        <div className="feat__features-container__feature">
            <div className="feat__features-container__feature-title">
                <h1>
                    <a href={link} target="__blank">{title} &nbsp; <i class="fa fa-angle-right"></i> </a>
                </h1>
                <h5 className="feat__features-container__feature-title-aboveTitle">
                    {aboveTitle}
                </h5>
                <br></br>
            </div>
            <div className="feat__features-container__feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature
