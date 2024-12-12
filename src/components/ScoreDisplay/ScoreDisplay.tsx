// src/components/ScoreDisplay/ScoreDisplay.tsx
<<<<<<< HEAD

=======
 
>>>>>>> main
import React from 'react';
import styles from './ScoreDisplay.module.css';
 
interface ScoreDisplayProps {
  playerScore: number;
  computerScore: number;
}
 
const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ playerScore, computerScore }) => {
  return (
    <div className={styles.scoreDisplay}>
      <h3>Scores</h3>
      <p>Player: {playerScore}</p>
      <p>Computer: {computerScore}</p>
    </div>
  );
};
 
export default ScoreDisplay;
 
 