import React from 'react';
import './cta.css'

const CTA = () => {
    return (
        <div className="call__cta">
            <div className="call__cta-content">
                <p>Add me on Spotify!</p>
                <h3>Want playlists for studying, coding, getting boba, sleeping, staring at the rain, & more? </h3>
            </div>
            <div className="call__cta-button">
                <button type="button">
                    <a href="https://open.spotify.com/user/plutoflash" target="__blank">Sure! <i class="fa fa-spotify"></i> </a>
                </button>
            </div>
        </div>
    )
}

export default CTA
