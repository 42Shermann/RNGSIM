import React, { useState } from 'react';
import { DATA } from './data/data';

function App() {

  const [itemClass, setClass] = useState('');
  const [itemType, setType] = useState('');
  const [itemStats1, setStats1] = useState('');
  const [itemStats2, setStats2] = useState('');
  const [itemSkills, setSkill] = useState('');

  function getRandomNumber(min, arr) {
    let max = arr.length -1 ;
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    let arrResult = arr[result];
    return arrResult;
  }

  function upStates() {
    setClass(getRandomNumber(0, DATA.classes));
    setType(getRandomNumber(0, DATA.types));
    setStats1(getRandomNumber(0, DATA.subStats));
    setStats2(getRandomNumber(0, DATA.subStats));
    setSkill(getRandomNumber(0, DATA.additionalSkill));
  }

  return (
    <div className="todoapp stack-large">
        <h1>TM Gear Crafting Simulator</h1>
        <button 
          type="button" 
          className="btn btn__primary btn__lg"
          onClick={upStates}>
        Craft</button>
        <div className="stack-small">
          <div className="c-cb">
              <p>Class</p>
              {itemClass}
          </div>
          <div className="c-cb">
              <p>Type</p>
              {itemType}
          </div>
          <div className="c-cb">
              <ul>Substats</ul>
                <li>{itemStats1}</li>
                <li>{itemStats2}</li>
          </div>
          <div className="c-cb">
              <p>Additonal Skill</p>
              {itemSkills}
          </div>
        </div>  
      
    </div>
  );
}

export default App;
