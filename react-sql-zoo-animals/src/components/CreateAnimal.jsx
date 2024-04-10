import React from "react";
import { useState } from "react";

const CreateAnimal = () => {
    const [name, setName]= useState("");
    const [animalClass, setAnimalClass]= useState("");
    const [weight, setWeight]= useState("");
    const [livesInZoo, setLivesInZoo]= useState(0);


    const handleFormSubmit=(e)=>{
        e.preventDefault();

        console.log(name, animalClass, weight, livesInZoo)
        setName("");
        setAnimalClass("")
        setWeight("")
        setLivesInZoo(0)
    }
    return (
        <div>
            <h1>Create animal record</h1>

            <form>
                <label>Animal name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

                <label>Animal class</label>
                <input type="text" value={animalClass} onChange={(e)=>setAnimalClass(e.target.value)} />

                <label>Animal weight</label>
                <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} />

                <label>Does animal live in the zoo?</label>
                <input type="checkbox" checked={livesInZoo} onChange= {() => setLivesInZoo(prev => !prev)} />

                <button onClick={handleFormSubmit}>submit</button>
            </form>
        </div>
    )
}


export default CreateAnimal