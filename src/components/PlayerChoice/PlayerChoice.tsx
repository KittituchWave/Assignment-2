// src/components/PlayerChoice/PlayerChoice.tsx

import React from 'react';
import styles from './PlayerChoice.module.css';
import { Choice } from '../../utils/bot'; // Adjust the path as necessary

interface PlayerChoiceProps {
  onChoiceSelect: (choice: Choice) => void;
}

const PlayerChoice: React.FC<PlayerChoiceProps> = ({ onChoiceSelect }) => {
  const choices: Choice[] = ['Rock', 'Paper', 'Scissors'];

  return (
    <div className={styles.playerChoice}>
      <h3>Select Your Choice</h3>
      <div className={styles.buttons}>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => onChoiceSelect(choice)}
            className={styles.button}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlayerChoice;
