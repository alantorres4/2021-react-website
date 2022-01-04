import React from 'react';
import './feature.css';

const Feature = ({ title, text, link }) => {
    return (
        <div className="feat__features-container__feature">
            <div className="feat__features-container__feature-title">
                <div />
                <h1>
                    <a href={link} target="__blank">{title}</a>
                </h1>
                <br></br>
            </div>
            <div className="feat__features-container__feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature
