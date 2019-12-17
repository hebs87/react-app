import React from 'react';
// Import the card-list.component from the .jsx file
import { CardList } from './components/card-list/card-list.component';
// Import the SearchBox component
import { SearchBox } from './components/search-box/search-box.component';
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

    // We move the handleChange logic out of the SearchBox property
    // We create an arrow function and define the setState value
    // This enables us to reuse this in other places if needed
    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        // To filter the results from the searchField,
        // we need to destructure the original state array
        // Declaring the const in the way as below is the same as
        // const monsters = this.state.monsters
        // const searchField = this.state.searchField
        const {monsters, searchField} = this.state;
        // We then create a new const to get the filtered results
        // We need to convert both the monster name and searchField
        // values to lower case so that we don't get unwanted errors
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
            )
        return (
            <div className="App">
                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />
                <CardList
                    monsters={ filteredMonsters }
                />
            </div>
        )
    }
}

export default App;
