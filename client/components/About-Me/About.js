//Landing Page when a user initially comes to the site.  Simple paragraph about myself "elevator pitch", professional photo (waiting for Sarah to send over from the shoot).  Photo on right side of the page, and description of myself as a developer on the left side of the page. Plain background color.

import React from 'react';
import './About.css';

function About() {
    return(
        <div className="about">
            <h1>Cat's Coding Closet Portfolio</h1>
            <h3>About Me</h3>
            <p className="about-paragraph">  Coming from an extensive background in customer service, and always having an interest in all things a little bit nerdy, I fell into a unique position where I love to talk "techy", but I can also explain tech in a bit more plain English for the not so "techy".  I started my tech journey through the Penn LPS Bootcamp program back in May of 2021.  I fell in love with the ability to create something out of nothing, and haven't stopped since.  I thrive on bringing visions to life, if you're in need of a web representation of your business or just yourself, feel free to reach out.  I'd be thrilled to be apart of bring your dream to life.</p>
        </div>
    )
}

export default About;