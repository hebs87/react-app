import React from 'react';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            // Set the initial state to an empty array
            // We want to fill this with the API data
            monsters: []
        };
    }
    
    // Use the componentDidMount Life Cycle Method to
    // fetch the data from the API URL
    // then convert the response to json so JS can use it
    // then setState of the initial monsters array to the
    // body of the API data (response we converted to json)
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    render() {
        return (
            <div className="App">
                {
                    // Map returns the return of the function passed
                    // to it, iterated over every element in it
                    // We create a monster function and return h1
                    // with monster names
                    // Pass the ID in as a key on the relevant element
                    this.state.monsters.map(monster => (
                    <h1 key={monster.id}> { monster.name } </h1>
                    ))
                }
            </div>
        )
    }
}

export default App;
