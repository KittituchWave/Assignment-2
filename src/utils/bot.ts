// src/utils/bot.ts
 
export type Choice = 'Rock' | 'Paper' | 'Scissors';
 
export const getBotChoice = (): Choice => {

  const choices: Choice[] = ['Rock', 'Paper', 'Scissors'];

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];

};

 