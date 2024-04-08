import React from "react";

const AnimalsList = ({animalsList, handleDelete, setShowID}) => {
    const {id, name, animalClass, weight, lives_in_zoo} = animalsList;

    return (
        <li>
            <span>{id}</span>
            <span>{name}</span>
            <span>{animalClass}</span>
            <span>{weight}</span>
            <span>{lives_in_zoo}</span>
        </li>
    )
}

export default AnimalsList