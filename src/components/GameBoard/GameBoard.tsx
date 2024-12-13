// src/components/GameBoard/GameBoard.tsx

import React, { useState } from 'react';
import PlayerChoice from '../PlayerChoice/PlayerChoice';
import ComputerChoice from '../ComputerChoice/ComputerChoice';
import PlayerSelection from '../PlayerSelection/PlayerSelection';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import styles from './GameBoard.module.css';
import { Choice, getBotChoice } from '../../utils/bot';

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

  /**
   * Handles the player's choice selection.
   * @param {Choice} choice - The player's selected choice.
   */
  const handlePlayerChoice = (choice: Choice) => {
    setPlayerChoice(choice);
    const botChoice = generateComputerChoice();
    setComputerChoice(botChoice);
    determineResult(choice, botChoice);
  };

  /**
   * Generates the computer's choice.
   * @returns {Choice} - The computer's choice.
   */
  const generateComputerChoice = (): Choice => {
    return getBotChoice();
  };

  /**
   * Determines the result of the game based on player and computer choices.
   * @param {Choice} player - The player's choice.
   * @param {Choice} computer - The computer's choice.
   */
  const determineResult = (player: Choice, computer: Choice) => {
    if (player === computer) {
      setResult({
        status: 'Tie',
        message: "Both selected the same choice. It's a Tie!",
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
      setPlayerScore((prev) => prev + 1);
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
      setComputerScore((prev) => prev + 1);
    }
  };

  /**
   * Resets the game to its initial state.
   */
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
      {playerChoice && <PlayerSelection choice={playerChoice} />}
      {computerChoice && <ComputerChoice choice={computerChoice} />}
      {result && <ResultDisplay result={result.status} message={result.message} />}
      <button onClick={resetGame} className={styles.resetButton}>
        Reset Game
      </button>
    </div>
  );
};

export default GameBoard;
