import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div class="cardWrapperWrapper">
            <div class="cardWrapper">
                <img alt={props.name} src={props.image} class="cardImg" />
            </div>
        </div>
    );
}
export default Card;