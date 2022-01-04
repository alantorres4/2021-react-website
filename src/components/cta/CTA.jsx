import React from 'react';
import './cta.css'

const CTA = () => {
    return (
        <div className="call__cta">
            <div className="call__cta-content">
                <p>Add me on Spotify!</p>
                <h3>Want to hear some of my playlists for studying, coding, getting boba, falling asleep, staring at the rain, etc.? </h3>
            </div>
            <div className="call__cta-button">
                <button type="button">
                    <a href="https://open.spotify.com/user/plutoflash" target="__blank">Listen on Spotify! <i class="fa fa-spotify"></i> </a>
                </button>
            </div>
        </div>
    )
}

export default CTA
