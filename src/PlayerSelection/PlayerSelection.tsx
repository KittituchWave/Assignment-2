// src/components/PlayerSelection/PlayerSelection.tsx
 
import React from 'react';
import { Choice } from '../../utils/bot';
import styles from './PlayerSelection.module.css';
 
interface PlayerSelectionProps {
  choice: Choice;
}
 
const PlayerSelection: React.FC<PlayerSelectionProps> = ({ choice }) => {
  return (
    <div className={styles.container}>
      <h3>Your Selection: {choice}</h3>
    </div>
  );
};
 
export default PlayerSelection;
 
 