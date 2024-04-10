import React from "react";


const AnimalsList = ({ animalsList, handleDelete, setShowID }) => {
    return (
        <>
            {animalsList && animalsList.map(animal => {
                console.log(animal)
                const { id, name, animalClass, weight, lives_in_zoo } = animal;
                return (
                    <li key={id}>
                        <span>id: {id}</span>
                        <span>name: {name}</span>
                        <span>class: {animalClass}</span>
                        <span>weight: {weight}</span>
                        <span>lives in zoo: {lives_in_zoo ? "Yes" : "No"}</span>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                        <button onClick={() => setShowID(id)}>Show ID</button>
                    </li>
                );
            })}
        </>
    );
};

export default AnimalsList;