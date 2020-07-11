import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <a href={`https://www.wikidex.net/wiki/${props.pokemon.name}`}>
    <div className="card-container">
      <img
        alt="pokemon"
        src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.pokemon.name}.png`}
      ></img>
      <h2> {props.pokemon.name}</h2>
    </div>
  </a>
);
