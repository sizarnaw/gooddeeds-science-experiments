
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';
import {ExperimentCard} from './components/ExperimentCard'
function App() {
  

  return (
      <>
      <Header/>
      <div className="text-center mb-5">
        <button className="btn btn-primary btn-lg">Surprise Me!</button>
      </div>
      <ExperimentCard/>

      {/* ... other components like ExperimentCard ... */}

      <footer className="text-center mt-5">
        <p>© 2023 GoodDeeds.AI</p>
      </footer>
      </>
  );
}

export default App;
