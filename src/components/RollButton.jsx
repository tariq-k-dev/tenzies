import React from 'react';
import styles from './RollButton.module.css';

function RollButton({ rollDice }) {
  return (
    <button className={styles.rollButton} onClick={rollDice}>
      Roll
    </button>
  );
}

export default RollButton;
