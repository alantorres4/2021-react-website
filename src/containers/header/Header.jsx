import React from 'react';
import './header.css';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="heading__header section__padding" id="home">
            <div className="heading__header-content">
                <h1 className="gradient__text">Alan Torres</h1>
                <p>I am a Mexican-American programmer studying at the University of Arkansas Computer Science and Computer Engineering Department in Fayetteville, AR. <br></br><br></br>Feel free to look around the site and contact me if you have any questions, want to work on a project together, have a song recommendation, etc.</p>

            </div>
                <div className="heading__header-image">
                    <img src={ai} alt="ai"/>
                </div>
        </div>
    )
}

export default Header
