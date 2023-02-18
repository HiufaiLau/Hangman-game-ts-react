type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  // const word ="test";
  // const guessedLetters =["t","g","e"];
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        gap: ".25em",
        fontSize: "3rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {/* display the letters one by one individually */}
      {wordToGuess.split("").map((letter, index) => (
        // key is the identifier for each letter of the word
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
