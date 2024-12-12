// src/App.tsx

import React from 'react';
import Header from './components/Header/Header';
import GameBoard from './components/GameBoard/GameBoard';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <GameBoard />
    </div>
  );
};

export default App;
