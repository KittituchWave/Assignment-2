// src/components/GameBoard/GameBoard.tsx
import React from 'react';
import PlayerChoice from '../PlayerChoice/PlayerChoice';
import ComputerChoice from '../ComputerChoice/ComputerChoice';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import Header from '../Header/Header';
import styles from './GameBoard.module.css';

const GameBoard: React.FC = () => {
  // State management and game logic will be added here

  return (
    <div className={styles.gameBoard}>
      <Header />
      <ScoreDisplay playerScore={0} computerScore={0} />
      <PlayerChoice />
      <ComputerChoice />
      <ResultDisplay />
    </div>
  );
};

export default GameBoard;
