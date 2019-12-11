import React from 'react';
// Import the card styles
import './card.styles.css'

export const Card = props => (
    // We pass an individual monster into our card component
    // So this creates it and the card-list component displays it
    // The Card component gets the value from the props and displays
    // We pass in img src but change the number to the monster ID
    // Then add the h2 and p details
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);