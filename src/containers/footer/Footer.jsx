import React from 'react';
import './footer.css';

import { GitHub, LinkedIn, Instagram, Spotify, Twitter } from './imports';


const Footer = () => {
    return ( 
    <div className="foot__footer section__padding">
        <div className="foot__footer-heading">
            <h1 className="gradient__text">Have any more questions? Let me know!<br></br><br></br>You can also follow me on several social medias :)</h1>
        </div>

        <div className="foot__footer-button">
            <p>
                <a href = "mailto: ajtorres729@gmail.com">Email me!</a>
            </p>
        </div>

        <div className="branding__brand section__padding">

            <div>
                <a href="https://github.com/alantorres4" target="__blank">
                    <img src={GitHub} alt="github" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/alan-torres-054519178/" target="__blank">
                    <img src={LinkedIn} alt="linkedin" />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/alanjto/" target="__blank">
                    <img src={Instagram} alt="instagram" />
                </a>
            </div>
            <div>
                <a href="https://open.spotify.com/user/plutoflash" target="__blank">
                    <img src={Spotify} alt="spotify" />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/alanjtorr" target="__blank">
                    <img src={Twitter} alt="twitter" />
                </a>
            </div>
        </div>

        <div className="foot__footer-copyright">
            <p>&copy; { new Date().getFullYear() } Alan Torres</p>
            <br></br>
            <p>Header Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
        </div>
     </div>
    )
}

export default Footer
