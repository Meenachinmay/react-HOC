import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Spinner from './Spinner'

function App() {
  const texts = {
    name: "chinmay",
    cast: "meena"
  }
  return (
    <div className="App">
      {/* if you want to pass props to ClickCounter Components you have to pass them here and then they will go to HOC first and then from HOC
      again you have to pass them to the originalComponet 
      like i am passing here texts as data props*/}
      {/* <ClickCounter data={texts}/>
      <HoverCounter /> */}
      <Spinner />
    </div>
  );
}

export default App;
