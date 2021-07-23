import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo sint nemo quam laboriosam
                   molestiae quos odio 
                   voluptatem placeat hic nobis totam deleniti, ut numquam laborum nam modi a,
                   quae optio odit dolor minima maxime.
                </p>
                <button>{props.button}</button>
            </div>
            
        </div>
    )
}

export default About;

