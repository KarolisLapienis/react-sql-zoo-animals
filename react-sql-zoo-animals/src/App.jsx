import './App.css';
import CreateAnimal from './components/CreateAnimal';
import AnimalsList from './components/AnimalsList';
import { useEffect, useState } from 'react';
import axios from 'axios';

const animalsList = { id: 1, name: "Liūtas", animalClass: "Žinduolis", weight: "350", lives_in_zoo: 1 }



function App() {
  const [create, setCreate] = useState(null);
  const [updateTime, setUpdateTime] = useState(Date.now())

  useEffect(()=> {
    if (create === null) {
      return
    }

    axios
      .post("http://localhost:3003/zoo", create)
      .then ((res)=> setUpdateTime(Date.now()))

  })


  return (
    <div className="App">
      <CreateAnimal/>
      <AnimalsList/>
    </div>
  );
}

export default App;
