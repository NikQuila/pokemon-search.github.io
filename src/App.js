import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
    };
  }

  componentDidMount() {
    var count = 1;
    var allPokemonsComplete = [];
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=721")
      .then((response) => response.json())
      .then((pokemon) => this.setState({ pokemons: pokemon.results }))
      .then(() =>
        this.state.pokemons.forEach((pokemon) => {
          allPokemonsComplete.push(pokemon);
          pokemon.pokedex = count.pad(3);
          count += 1;
        })
      )
      .then(() => {
        this.setState({ poklemons: allPokemonsComplete });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter((pokemon) => {
      return (
        pokemon.name.toLowerCase().includes(searchField.toLowerCase()) ||
        pokemon.pokedex.includes(searchField.toLowerCase())
      );
    });
    return (
      <div className="App">
        <h1 className="titulo">Pokemon Search</h1>

        <SearchBox
          placeholder="Search"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList pokemons={filteredPokemons}></CardList>
      </div>
    );
  }
}

export default App;
