// src/components/ComputerChoice/ComputerChoice.tsx
import React, { useEffect, useState } from 'react';
import { getBotChoice, Choice } from '../../utils/bot';
import styles from './ComputerChoice.module.css';

interface ComputerChoiceProps {
  setComputerChoice: (choice: Choice) => void;
}

const ComputerChoice: React.FC<ComputerChoiceProps> = ({ setComputerChoice }) => {
  const [choice, setChoice] = useState<Choice>('Rock');

  useEffect(() => {
    const botChoice = getBotChoice();
    setChoice(botChoice);
    setComputerChoice(botChoice);
  }, [setComputerChoice]);

  return (
    <div className={styles.container}>
      <h3>การเลือกของคอมพิวเตอร์: {choice}</h3>
    </div>
  );
};

export default ComputerChoice;
