import React from "react";
import './Pokecard.css'

const pokeImgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
    let imgSrc = `${pokeImgURL}${props.id}.png`
    return (
    <div className="Pokecard">
        <h4 className="Pokecard-name" >{props.name}</h4>
        <img className="Pokecard-img" alt="" src={imgSrc} />
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {props.exp}</div>
    </div>
);
}

export default Pokecard;