import styles from './Die.module.css';

function Dice({ die, handleClick }) {
  const { value, isFrozen, index } = die;
  const frozenStyle = isFrozen ? styles.frozen : '';

  return (
    <button
      key={index}
      className={`${styles.die} ${frozenStyle}`}
      onClick={() => handleClick(index)}
    >
      {value}
    </button>
  );
}

export default Dice;
