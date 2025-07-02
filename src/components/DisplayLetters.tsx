import React, { use, useEffect } from 'react'
import { useGameContext } from '../services/gameContext';
import { alphabetLower } from '../services/alphabet';
import type { wordSolve } from '../services/types';
type TextboxProps = {  
    word: wordSolve;
    displayLetters: string[];
    currentGuess: string[];
    setCurrentGuess: (letter: string) => void;
}  

function DisplayLetters({word, displayLetters, currentGuess, setCurrentGuess}: TextboxProps){
    //map currentLetters and random letters

    function handleLetterClick(letter: string) {
        setCurrentGuess(prevGuess => [...prevGuess, letter]);
        if(currentGuess.length > word.word.length -1) {
            // If the current guess exceeds the word length, reset it
            setCurrentGuess([]);    
        }
    }
    return (
        <div className='grid grid-cols-6 gap-5 bg-zinc-800 p-4 rounded-lg mt-5'>
            {
                displayLetters.map((letter, index) => (
                    <span key={index} className="grid place-items-center h-14 w-22 text-center text-zinc-50 uppercase text-4xl font-bold
                    bg-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-600 transition-colors "
                    onClick={() => {
                        handleLetterClick(letter);
                    }}
                    >
                        {letter}
                    </span>
                ))
            }
        </div>
    )
}

export default DisplayLetters
