// src/components/ResultDisplay/ResultDisplay.tsx
import React from 'react';
import styles from './ResultDisplay.module.css';

interface ResultDisplayProps {
  result: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className={styles.resultDisplay}>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default ResultDisplay;
