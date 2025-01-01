import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText] = useState(0);
    const[isDarkTheme, setIsDarkTheme] = useState(false);
    // console.log("Rendering...");
    //Heavy operation

    const prime = useMemo(() => findNthPrime(text),[text]);
    // const prime = findNthPrime(text);

  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black " + (isDarkTheme && "bg-gray-900 text-white")}>
        <div>
            <button 
                className='mx-20 my-3 p-2 bg-green-500 rounded-lg'
                onClick={() => setIsDarkTheme(!isDarkTheme)}>Theme</button>
        </div>
        <div>
            <input 
                type='number' 
                value={text} 
                onChange={(e) =>setText(e.target.value)}
                className={'border border-black w-72 p-2 '+ (isDarkTheme &&  "text-black")}
            />
        </div>
        <div>
            <h1 className="mt-4 font-bold text-lg ">nth prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo