import React from 'react';
import styles from './ScoreDisplay.module.css';

interface ScoreDisplayProps {
  playerScore: number;
  computerScore: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ playerScore, computerScore }) => {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.scoreBox}>
        <h3>คะแนนผู้เล่น</h3>
        <p>{playerScore}</p>
      </div>
      <div className={styles.scoreBox}>
        <h3>คะแนนคอมพิวเตอร์</h3>
        <p>{computerScore}</p>
      </div>
    </div>
  );
};

export default ScoreDisplay;
