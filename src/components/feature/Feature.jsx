import React from 'react';
import './feature.css';

const Feature = ({ aboveTitle, title, text, link, imgSrc }) => {
    return (
        <div className="feat__features-container__feature">
            <div className="feat__features-container__feature-title">
                <h1> {title} </h1>
                <h5 className="feat__features-container__feature-title-aboveTitle">
                    <a href={link} target="__blank">{aboveTitle} </a>
                </h5>
                
                <br></br>
            </div>
            {imgSrc && 
                <div className="feature-image">
                    <img src={imgSrc} alt="project"/>
                </div>
            }
            <div className="feat__features-container__feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature
