import React from 'react';
import Dice from './Die';
import RollButton from './RollButton';
import './App.css';

function App() {
  const allNewDice = generateAllNewDice();
  const [dice, setDice] = React.useState(allNewDice);

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      index: crypto.randomUUID(),
      value: Math.floor(Math.random() * 6) + 1,
      isFrozen: false,
    }));
  }

  function rollDice() {
    setDice((prevDice) => {
      return prevDice.map((die) =>
        die.isFrozen
          ? die
          : { ...die, value: Math.floor(Math.random() * 6) + 1 }
      );
    });
  }

  function toggleFreeze(index) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.index === index ? { ...die, isFrozen: !die.isFrozen } : die
      )
    );
  }

  return (
    <main className='main'>
      <h1 className='h1'>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>
        {dice.map((dieObj) => (
          <Dice key={dieObj.index} die={dieObj} handleClick={toggleFreeze} />
        ))}
      </div>
      <RollButton rollDice={rollDice} />
    </main>
  );
}

export default App;
