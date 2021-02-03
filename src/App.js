
import './App.css';

import Hero from "./components/Herosection.js";
import Red from "./components/Red.js";

import { Icon } from '@iconify/react';
import baselineDehaze from '@iconify-icons/ic/baseline-dehaze';

function App() {
  return (
    <div className="App">
      <p className="main-company-title">
        EXP|CON
      </p>
      <Icon icon={baselineDehaze} className="main-icon" width="56" />
      <Hero/>
      <Red/>
    </div>
  );
}

export default App;
