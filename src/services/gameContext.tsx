import { createContext, use, useContext, useEffect, useState, type PropsWithChildren } from 'react';
import type { wordSolve } from './types';
import { dummyData } from './dummyData';

type GameContextType = {
    currentWord: wordSolve | null;
    setCurrentWord: (word: wordSolve) => void;
    currentLetters: string[];
    setCurrentLetters: (letters: string[]) => void;
    guessedWord: string;
    setGuessedWord: (word: string) => void;
    currentWordCount: number;
    setCurrentWordCount: (count: number) => void;
    points: number;
    setPoints: (points: number) => void;
    gameData?: wordSolve[];
    currentWordId?: number;
    setCurrentWordId?: (id: number) => void;
}

const GameContext = createContext<GameContextType | undefined>({
    currentWord: null,
    setCurrentWord: () => {},
    currentLetters: [],
    setCurrentLetters: () => {},
    guessedWord: '',
    setGuessedWord: () => {},
    currentWordCount: 0,
    setCurrentWordCount: () => {},
    points: 0,
    setPoints: () => {},
    gameData: dummyData,
    currentWordId: undefined,
    setCurrentWordId: () => {},
})

export default function GameContextProvider({children}: PropsWithChildren){
    const [currentWord, setCurrentWord] = useState<wordSolve | null>(dummyData[0] || null);
    const [points, setPoints] = useState(0);
    const [currentWordId, setCurrentWordId] = useState<number | undefined>(1);
    const [guessedWord, setGuessedWord] = useState<string>('');
    const [currentWordCount, setCurrentWordCount] = useState<number>(0);
    const [currentLetters, setCurrentLetters] = useState<string[]>([]);


    const setGameCurrentWord = (word: wordSolve | null) => {
        setCurrentWord(word);
    }

    const setGamePoints = (points: number) => {
        setPoints(points);
    }

    const setGameCurrentWordId = (id: number) => {
        setCurrentWordId(id);
    }


    useEffect(() => {
        // Update the current word count whenever the current word changes
        if (currentWord) {
            setCurrentWordCount(currentWord.word.length);
            setCurrentLetters(currentWord.word.split(''));
        } else {
            setCurrentWordCount(0);
            setCurrentLetters([]);
        }
    }, [currentWord]);

    return(
        <GameContext.Provider 
        value=
        {{ 
        currentWord, 
        setCurrentWord: setGameCurrentWord,
        points, 
        setPoints: setGamePoints,
        gameData: dummyData,
        currentWordId,
        setCurrentWordId: setGameCurrentWordId,
        guessedWord,
        setGuessedWord,
        currentWordCount,
        setCurrentWordCount: setCurrentWordCount,
        currentLetters,
        setCurrentLetters
        }}
        >
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => useContext(GameContext);
