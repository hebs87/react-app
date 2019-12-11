import React from 'react';

export const Card = props => (
    // We pass an individual monster into our card component
    // So this creates it and the card-list component displays it
    // The Card component gets the value from the props and displays
    <div>
        <h1>{props.monster.name}</h1>
    </div>
);