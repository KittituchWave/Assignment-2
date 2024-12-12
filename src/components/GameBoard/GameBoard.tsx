// src/components/GameBoard/GameBoard.tsx

import React, { useState } from 'react';
import PlayerChoice from '../PlayerChoice/PlayerChoice';
import ComputerChoice from '../ComputerChoice/ComputerChoice';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import styles from './GameBoard.module.css';
import { Choice, getBotChoice } from '../../utils/bot'; // Ensure correct path

const GameBoard: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | ''>('');
  const [computerChoice, setComputerChoice] = useState<Choice | ''>('');
  const [result, setResult] = useState<string>('');
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  const handlePlayerChoice = (choice: Choice) => {
    setPlayerChoice(choice);
    const botChoice = generateComputerChoice();
    setComputerChoice(botChoice);
    determineResult(botChoice);
  };

  const generateComputerChoice = (): Choice => {
    return getBotChoice();
  };

  const determineResult = (compChoice: Choice) => {
    if (playerChoice === compChoice) {
      setResult('Tie');
    } else if (
      (playerChoice === 'Rock' && compChoice === 'Scissors') ||
      (playerChoice === 'Paper' && compChoice === 'Rock') ||
      (playerChoice === 'Scissors' && compChoice === 'Paper')
    ) {
      setResult('You Win!');
      setPlayerScore(playerScore + 1);
    } else {
      setResult('You Lose!');
      setComputerScore(computerScore + 1);
    }
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <div className={styles.gameBoard}>
      <ScoreDisplay playerScore={playerScore} computerScore={computerScore} />
      <PlayerChoice onChoiceSelect={handlePlayerChoice} />
      {computerChoice && <ComputerChoice choice={computerChoice} />}
      {result && <ResultDisplay result={result} />}
      <button onClick={resetGame} className={styles.resetButton}>
        Reset Game
      </button>
    </div>
  );
};

export default GameBoard;
