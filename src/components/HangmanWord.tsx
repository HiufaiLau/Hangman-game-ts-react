import '../styles/main.scss';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className='hangman-word'>
      {wordToGuess.split('').map((letter, index) => (
        <span key={index}>
          <span
            className={`${
              guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden'
            } ${!guessedLetters.includes(letter) && reveal ? 'reveal' : ''}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
