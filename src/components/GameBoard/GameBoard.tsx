// src/components/GameBoard/GameBoard.tsx

import React, { useState } from 'react';
import PlayerChoice from '../PlayerChoice/PlayerChoice';
import ComputerChoice from '../ComputerChoice/ComputerChoice';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import styles from './GameBoard.module.css';
import { Choice, getBotChoice } from '../../utils/bot'; // Ensure correct path

interface GameResult {
  status: 'Win' | 'Lose' | 'Tie';
  message: string;
}

const GameBoard: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | ''>('');
  const [computerChoice, setComputerChoice] = useState<Choice | ''>('');
  const [result, setResult] = useState<GameResult | null>(null);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  const handlePlayerChoice = (choice: Choice) => {
    setPlayerChoice(choice);
    const botChoice = generateComputerChoice();
    setComputerChoice(botChoice);
    determineResult(choice, botChoice);
  };

  const generateComputerChoice = (): Choice => {
    return getBotChoice();
  };

  const determineResult = (player: Choice, computer: Choice) => {
    if (player === computer) {
      setResult({
        status: 'Tie',
        message: 'Both selected the same choice. It\'s a Tie!',
      });
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      setResult({
        status: 'Win',
        message: `${player} beats ${computer}. You Win!`,
      });
      setPlayerScore(prev => prev + 1);
    } else {
      let reason = '';
      switch (computer) {
        case 'Rock':
          reason = 'Rock crushes Scissors';
          break;
        case 'Paper':
          reason = 'Paper covers Rock';
          break;
        case 'Scissors':
          reason = 'Scissors cuts Paper';
          break;
        default:
          reason = '';
      }
      setResult({
        status: 'Lose',
        message: `${computer} beats ${player}. You Lose! (${reason})`,
      });
      setComputerScore(prev => prev + 1);
    }
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult(null);
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <div className={styles.gameBoard}>
      <ScoreDisplay playerScore={playerScore} computerScore={computerScore} />
      <PlayerChoice onChoiceSelect={handlePlayerChoice} />
      {computerChoice && <ComputerChoice choice={computerChoice} />}
      {result && <ResultDisplay result={result.status} message={result.message} />}
      <button onClick={resetGame} className={styles.resetButton}>
        Reset Game
      </button>
    </div>
  );
};

export default GameBoard;
