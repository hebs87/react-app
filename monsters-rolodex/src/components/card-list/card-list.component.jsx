import React from 'react';
// Import the CSS styles
import './card-list.styles.css'

// Each component takes a props property
// The properties will be any attributes/properties
// that are passed into the JSX code in the App.js
// Children prop is in-built in the object
// It is the value passed in between the CardList JSX tag
export const CardList = props => (
    // Add the card-list class to the div tag for styling
    // (from the .css file)
    <div className='card-list'>
        {
            props.monsters.map(monster => (
                <h1 key={monster.id}> { monster.name } </h1>
            ))
        }
    </div>
);