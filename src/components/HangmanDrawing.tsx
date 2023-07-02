import '../styles/main.scss';

const HEAD = <div className='hangman-body-part head' />;

const BODY = <div className='hangman-body-part body' />;

const RIGHT_ARM = <div className='hangman-body-part right-arm' />;

const LEFT_ARM = <div className='hangman-body-part left-arm' />;

const RIGHT_LEG = <div className='hangman-body-part right-leg' />;

const LEFT_LEG = <div className='hangman-body-part left-leg' />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className='hangman-drawing'>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className='hangman-background' />
      <div className='hangman-base' />
      <div className='hangman-rope' />
      <div className='hangman-ground' />
    </div>
  );
}
