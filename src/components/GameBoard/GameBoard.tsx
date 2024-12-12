// src/components/GameBoard/GameBoard.tsx

import React, { useState } from 'react';
import PlayerChoice from '../PlayerChoice/PlayerChoice';
import ComputerChoice from '../ComputerChoice/ComputerChoice';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import styles from './GameBoard.module.css';

const GameBoard: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string>('');
  const [computerChoice, setComputerChoice] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    setComputerChoice(choice);
    determineResult(choice);
  };

  const determineResult = (compChoice: string) => {
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
