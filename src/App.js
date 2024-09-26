import logo from './logo.svg';
import './App.css';
import Data from './Data';
import Birthdays from './Components/Birthdays';
import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <Birthdays people={people}></Birthdays>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
