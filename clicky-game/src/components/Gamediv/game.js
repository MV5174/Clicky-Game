import React from "react";
import "./game.css";
import Card from "../Card/card";
import pokemon from "../../pokemon.json"

class Game extends React.Component {
    state = {
        pokemon: pokemon
    }

    render() {
        return (
            <div class="gameDiv">
                {this.state.pokemon.map(pokemon => (
                    <Card
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                    />
                ))}
            </div>
        );
    }
}
export default Game;