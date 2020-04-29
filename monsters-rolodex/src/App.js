import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SeachBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.mapUsers(users))
      .then((users) => users.slice(0, 8))
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SeachBox
          placeholder="search people ..."
          handleChange={this.handleSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  mapUsers = (users) => {
    let newUsers = [];
    users.forEach((user) => {
      newUsers.push({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    });

    return newUsers;
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };
}

export default App;
