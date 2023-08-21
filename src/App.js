
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';
import { useState } from "react";
import experiments from "./data/mockData"
import {ExperimentCard} from './components/ExperimentCard'
function App() {
  

  return (
      <>
      <Header/>
      {experiments.map(experiment => (
        <ExperimentCard
          key={experiment.id}
          id={experiment.id}
          title={experiment.title}
          grade={experiment.grade}
          description={experiment.description}
          imageURL={experiment.imageURL}
            />

      ))}

      {/* ... other components like ExperimentCard ... */}

      <footer className="text-center mt-5">
        <p>© 2023 GoodDeeds.AI</p>
      </footer>
      </>
  );
}

export default App;
