import React, { useState } from 'react'


type TextboxProps = {
    // Define any props you need here
    letterCount?: number;
    letterGuess: string[];
}
function Textbox({ letterGuess, letterCount }: TextboxProps) {
    const [inputValue, setInputValue] = useState('');
    
  return (
    <div>

    </div>
  )
}

export default Textbox
