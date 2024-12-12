// src/components/ResultDisplay/ResultDisplay.tsx

import React from 'react';
import styles from './ResultDisplay.module.css';

interface ResultDisplayProps {
  result: 'Win' | 'Lose' | 'Tie';
  message: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, message }) => {
  // Determine the color based on the result
  let resultColor = '';
  switch (result) {
    case 'Win':
      resultColor = '#4caf50'; // Green
      break;
    case 'Lose':
      resultColor = '#f44336'; // Red
      break;
    case 'Tie':
      resultColor = '#ff9800'; // Orange
      break;
    default:
      resultColor = '#000000'; // Black
  }

  return (
    <div className={styles.resultDisplay} style={{ borderColor: resultColor }}>
      <h3 style={{ color: resultColor }}>{result === 'Win' ? 'You Win!' : result === 'Lose' ? 'You Lose!' : 'Tie!'}</h3>
      <p>{message}</p>
    </div>
  );
};

export default ResultDisplay;
