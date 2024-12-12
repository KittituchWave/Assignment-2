// src/components/ComputerChoice/ComputerChoice.tsx

import React from 'react';
import { Choice } from '../../utils/bot';
import styles from './ComputerChoice.module.css';

interface ComputerChoiceProps {
  choice: Choice;
}

const ComputerChoice: React.FC<ComputerChoiceProps> = ({ choice }) => {
  return (
    <div className={styles.container}>
      <h3>Computer's Selection: {choice}</h3>
    </div>
  );
};
<<<<<<< HEAD

export default ComputerChoice;
=======
 
export default ComputerChoice;
 
 
>>>>>>> main
