import { useEffect, useState } from "react";
import { useGameContext } from "./services/gameContext"
import DisplayLetters from "./components/DisplayLetters";

function App() {
  const { currentWord, setCurrentWord, points, setPoints, gameData, currentWordId, setCurrentWordId, currentLetters, setCurrentLetters } = useGameContext();
  const [randomLetters, setRandomLetters] = useState<string[]>([]);
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const imageUrls = currentWord?.images || [];
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  
  // Example of setting the current word
  useEffect(() => {
    if (gameData.length > 0 && currentWordId !== undefined) {
      const word = gameData[currentWordId - 1];
      displayLetters(word.word.split(''), 12); // Display 12 letters including correct ones
    }
  }, [currentWordId, gameData, setCurrentWord, setCurrentLetters]);
  const displayLetters = (correctLetters: string[], maxLetters: number) => {
        const selectedRandomLetters = [];
        for(let i = 0; i < maxLetters - correctLetters.length; i++) {
            const randomIndex = Math.floor(Math.random() * alphabetLower.length);
            const randomLetter = alphabetLower[randomIndex];
            selectedRandomLetters.push(randomLetter);
        }
        // Combine the correct letters with the random letters
        const combinedLetters = [...correctLetters, ...selectedRandomLetters];
        // Shuffle the combined letters
        const shuffledLetters = combinedLetters.sort(() => Math.random() - 0.5);
        setRandomLetters(shuffledLetters);
    }

    console.log(currentGuess)

  return (
  <div className="h-screen w-screen bg-zinc-900 grid place-items-center">

    <div className="w-[30%] h-[50%] grid gap-y-3 grid-cols-2 place-items-center mb-5">
    {
      imageUrls.map((imageUrl: string, index: number) => (
        <div key={index} className="mb-4">
          <img src={imageUrl} alt={`Image ${index + 1}`} className=" bg-zinc-50 rounded-xl h-[250px] w-[250px]" />
        </div>
      ))
    }
    </div>
      <DisplayLetters
        currentGuess={currentGuess}
        word={currentWord}
        displayLetters={randomLetters}
        setCurrentGuess={setCurrentGuess}
      />
      <div className="text-white mt-4">
        <p>Current Word: {currentWord ? currentWord.word : "Loading..."}</p>
        <p>Points: {points}</p>
      </div>
  </div>
  )
}

export default App
