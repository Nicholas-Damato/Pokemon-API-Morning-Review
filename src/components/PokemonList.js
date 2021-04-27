import React, { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => {
        this.setState({ array: res.data.results });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>PokemonList</h1>
        {this.state.array.map((element, index) => {
          return <Pokemon key={index} pokemon={element} />;
          // <div key={index}>{element.name}</div>;
        })}
        {/* {JSON.stringify(this.state.array, null, 2)} */}
      </div>
    );
  }
}

export default PokemonList;
