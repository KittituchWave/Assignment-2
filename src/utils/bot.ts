// src/utils/bot.ts

export type Choice = 'Rock' | 'Paper' | 'Scissors';

/**
 * Randomly selects a Choice for the computer.
 * @returns {Choice} - The computer's choice.
 */
export const getBotChoice = (): Choice => {
  const choices: Choice[] = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
