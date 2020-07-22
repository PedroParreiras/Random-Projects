import React from 'react';
import './App.css';
import RelicList from "RelicList";
import { Relics } from "Data";

class App extends React.Component {
  render() {
    return (
      <div>
        <RelicList relicsList="Relics" />
      </div>
     );
  }
}

export default App;
