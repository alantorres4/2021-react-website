import React from 'react';
import './header.css';
import upscaledAlan from '../../assets/3d-alan-upscaled.png';

const Header = () => {
    return (
        <div className="heading__header section__padding" id="home">
                <div className="heading__header-content">
                    <h1>ALAN TORRES</h1>
                    <p>software engineer // open to work!<br></br><br></br>contact me if you have any questions, want to work on a project together, have a film recommendation, etc.</p>
                    <br></br>
                    <div className="social-links gradient__text">
                        <a href="https://www.threads.net/@alanjto" target="__blank" className="social-buttons"> <i class="fa fa-at"></i> </a>
                        <a href="https://www.instagram.com/alanjto/" target="__blank" className="social-buttons"> <i class="fa fa-instagram"></i> </a>
                        <a href="https://letterboxd.com/alantorres/" target="__blank" className="social-buttons"> <i class="fa fa-film"></i> </a>
                    </div>

                </div>
                <div className="heading__header-image">
                    <img src={upscaledAlan} alt="ai"/>
                </div>
        </div>
    )
}

export default Header

