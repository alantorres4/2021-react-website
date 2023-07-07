import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07 } from './imports';




const Blog = () => {
    return (
        <div className="blogger__blog section__padding" id="blog">
            <div className="blogger__blog-heading">
                <h1>Random Photos</h1>
                <h4>Updated every so often</h4>
            </div>
            <div className="blogger__blog-container">
                <div className="blogger__blog-container_groupB">
                    <Article imgUrl={blog07} date="May 25, 2022" title="San Diego, CA. Kimball sitting on a bench at the bach of the zoo. This was the largest zoo I've been to and we found this bench near the back of it! We were taking a break from all the walking so I snapped this with a disposable camera. Wonder what kind of turtle that is in the back" />
                    <Article imgUrl={blog06} date="May 24, 2022" title="Kimchi and I in front of a dino! This was on the first floor of the San Diego Natural History Museum. Lots of fossilized animals! We spent the day there and snapped this pic I believe after lunch." />
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
