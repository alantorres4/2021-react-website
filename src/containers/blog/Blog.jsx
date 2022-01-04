import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';




const Blog = () => {
    return (
        <div className="blogger__blog section__padding" id="blog">
            <div className="blogger__blog-heading">
                <h1 className="gradient__text">RANDOM <i class="fa fa-camera-retro"></i> PHOTOS</h1>
                <h3 className="gradient__text">That I think look neat</h3>
            </div>
            <div className="blogger__blog-container">
                <div className="blogger__blog-container_groupB">
                    <Article imgUrl={blog01} date="Aug 4, 2021" title="Santa Maria, CA. The building in the photo (behind Uriel) is the best burger I have EVER had, King Falafel. Life changing. It was after swimming at I think Santa Barbara? I was starving and exhausted from crashing against the waves and this burger, combined with the exhaustion, cool temperatures, nice wind- it was delicious. "/>
                    <Article imgUrl={blog02} date="Sept 28, 2020" title="A couple of stickers from Warpstar. I think they broke up? I know some or all of them made a new band called Droll."/>
                    <Article imgUrl={blog03} date="Sept 3, 2021" title="A couple of polaroids of Kim and I cheesin'" />
                    <Article imgUrl={blog04} date="Dec 31, 2021" title="Moses being lazy with me. I think he was laying like that because the cracked window was letting in a breeze." />
                    <Article imgUrl={blog05} date="May 20, 2021" title="An incredibly blurry image of my Walmart skateboard. I'm still terrible at it :/" />
                </div>

            </div>

        </div>
    )
}

export default Blog
