import React from 'react';
// Import the card-list.component from the .jsx file
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            // Set the initial state to an empty array
            // We want to fill this with the API data
            // Set searchField to empty string
            // We then fill it with search text
            monsters: [],
            searchField: ''
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
                <input 
                    type='search'
                    placeholder='search monsters'
                    onChange={e => this.setState({ searchField: e.target.value })}
                />
                <CardList monsters={ this.state.monsters } />
            </div>
        )
    }
}

export default App;
