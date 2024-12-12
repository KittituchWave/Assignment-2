export type Choice = 'Rock' | 'Paper' | 'Scissors';

/**
 * ฟังก์ชันสุ่มเลือก Rock, Paper หรือ Scissors
 * @returns {Choice} - การเลือกของบอท
 */
export const getBotChoice = (): Choice => {
  const choices: Choice[] = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
