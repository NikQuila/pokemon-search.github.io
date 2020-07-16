import React from "react";
import "./card.styles.css";
import Button from "react-bootstrap/Button";
import CardBS from "react-bootstrap/Card";

export const Card = (props) => (
  <a href={`https://www.wikidex.net/wiki/${props.pokemon.name}`}>
    <CardBS bg="light" border="dark" text="primary" className="card-container">
      <CardBS.ImgOverlay>
        <CardBS.Img
          variant="top"
          src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.pokemon.name}.png`}
        />
      </CardBS.ImgOverlay>
      <CardBS.Img src="https://static.vecteezy.com/system/resources/previews/000/625/844/non_2x/geometric-abstract-light-blue-background-for-website-wallpapers-bussines-templates-vector.jpg"></CardBS.Img>

      <CardBS.Body>
        <CardBS.Title className="capitalize">
          {`${props.pokemon.name}  #${props.pokemon.pokedex}`}
        </CardBS.Title>
        <Button variant="success">Check it</Button>
      </CardBS.Body>
    </CardBS>
  </a>
);
