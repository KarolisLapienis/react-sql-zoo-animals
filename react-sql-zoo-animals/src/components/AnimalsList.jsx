import React from "react";

const AnimalsList = ({animalsList, handleDelete, setShowID}) => {
    // const {id, name, animalClass, weight, lives_in_zoo} = animalsList;
    const id = 1
    const name = "as"
    const animalClass = "bird"
    const weight = 2
    const lives_in_zoo = 1

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