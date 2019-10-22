import React from "react";
import "./game.css";
import Card from "../Card/card";
import pokemon from "../../pokemon.json"

class Game extends React.Component {
    state = {
        pokemon,
        score: 0,
        highScore: 0,
    }

    componentDidMount() {
        this.setState({ pokemon: this.randomizeArr(this.state.pokemon.map(thisPokemon => {
            thisPokemon.clicked =false;
            return thisPokemon;
        }
            )) })
    }

    randomizeArr(arr) {
        var ctr = arr.length, temp, index;

        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = arr[ctr];
            arr[ctr] = arr[index];
            arr[index] = temp;
        }
        console.log(arr);
        return arr;


    }

    handleCorrect = event => {
        const thisId = event.target.getAttribute("data-id");
        const newPokemon = this.state.pokemon.map(thisPokemon => {
            if (thisPokemon.id === thisId) {
                thisPokemon.clicked = true;
            }
            return thisPokemon;
        })
        this.setState({pokemon: newPokemon})
        // if (!event.target.clicked) {
        //     this.setState({clicked: true})
        //     this.setState({ score: this.state.score + 1 })
        //     if (this.state.score > this.state.highScore) {
        //         this.setState({ highScore: this.state.highScore + 1 })
        //     }
        //     this.setState({ pokemon: this.randomizeArr(this.state.pokemon) })
        // } else {
        //     this.handleIncorrect();
        // }
        console.log(event.target.getAttribute("data-id"))

    }

    handleIncorrect() {

        this.setState({ score: 0 })
        this.setState({ pokemon: this.randomizeArr(this.state.pokemon) })
    }

    render() {
        return (
            <div class="gameDiv">
                {this.setArr}
                {this.state.pokemon.map(pokemon => (
                    <Card
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        clicked={pokemon.clicked}
                        onClick={this.handleCorrect}
                    />
                ))}
            </div>
        );
    }
}
export default Game;