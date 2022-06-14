import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="heading__header section__padding" id="home">
            <div className="heading__header-content">
                <h1 className="gradient__text">Alan Julio Torres</h1>
                <p>I'm a Mexican-American software engineer who graduated from the University of Arkansas and am currently based in the Fayetteville, AR region. <br></br><br></br>Feel free to look around the site and contact me if you have any questions, want to work on a project together, have a song recommendation, etc.</p>

            </div>
                <div className="heading__header-image">
                    <img src={ai} alt="ai"/>
                </div>
        </div>
    )
}

export default Header

