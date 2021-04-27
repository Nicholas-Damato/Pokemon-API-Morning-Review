import React, { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokeData: null
    };
  }

  componentDidMount = () => {
    axios
      .get(this.props.pokemon.url)
      .then((res) => {
        this.setState({ pokeData: res.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { pokeData } = this.state;
    return (
      <div>
        <h1> {this.props.pokemon.name} </h1>
        {pokeData && (
          <div>
            <img alt={pokeData.name} src={pokeData.sprites.front_default} />
            <p> Types: </p>
            <ul>
              {pokeData.types.map((element, index) => {
                return <li key={index}> {element.type.name} </li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Pokemon;
