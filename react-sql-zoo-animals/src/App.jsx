import './App.css';
import CreateAnimal from './components/CreateAnimal';
import AnimalsList from './components/AnimalsList';

const animalsList = { id: 1, name: "Liūtas", animalClass: "Žinduolis", weight: "350", lives_in_zoo: 1 }

function App() {
  return (
    <div className="App">
      <CreateAnimal/>
      <AnimalsList/>
    </div>
  );
}

export default App;
