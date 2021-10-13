import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import React, {useState} from 'react';

let peopleList = [
  {name: "Jared", role: "Slave"},
  {name: 'Karina', role: 'Motherhood'}
];

const initialFormValues = {name: "", role: ""};


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [people, setPeople] = useState(peopleList);

  
  return (
    <div className="App">
      <Header header="Welcome to my APP" updatePeople={setPeople} updateFormValues={setFormValues} formValues={formValues} people={people} initialFormValues={initialFormValues}/>
      <div className="cardHolder">
      {
      people.map((person, idx) => (
        <Card key={idx} name={person.name} role={person.role}/>
      ))}
      </div>
    </div>
  );
}

export default App;
