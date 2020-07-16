import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=721")
      .then((response) => response.json())
      .then((pokemon) => this.setState({ pokemons: pokemon.results }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="titulo">Pokemon Search</h1>

        <SearchBox
          placeholder="search Pokemon"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList pokemons={filteredPokemons}></CardList>
      </div>
    );
  }
}

export default App;
