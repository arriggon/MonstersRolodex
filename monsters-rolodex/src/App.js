import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.mapUsers(users))
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }

  mapUsers(users) {
    let newUsers = [];
    users.forEach((user) => {
      newUsers.push({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    });

    return newUsers;
  }
}

export default App;
