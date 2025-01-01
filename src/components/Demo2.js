import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
    const [y ,setY] = useState(0);
    let x = 0;
    const ref = useRef(0);
    /**
     * not like => ref = 0
     * ref = { current: 0(initial value)}
     * 
     **/
    const timer = useRef(null);
    useEffect(() =>{
        timer.current = setInterval(() =>{
            // console.log("Hello world", Math.random());
        },1000);
        // return () =>clearInterval(timer.current)
    }, []);


  return (
    <div className='p-2 m-4 bg-slate-50 border border-black h-96 w-96'>
        {/* For x it is not rendering */}
        <div>
            <button 
            className='bg-green-400 p-2 m-4 rounded-lg  '
            onClick={() =>{
                x = x + 1;
                console.log("x = " + x)
            }}
            >Increase x</button>
            <span className='font-bold text-lg'>Let = {x}</span>
        </div>


        {/* For y it is rendering*/}
        <div>
            <button 
            className='bg-green-400 p-2 m-4 rounded-lg  '
            onClick={() =>{
                setY(y+1)
            }}
            >Increase y</button>
            <span className='font-bold text-lg'>State = {y}</span>
        </div>

        {/* For z it is not rendering but the value is persisted behind*/}
        <div>
            <button 
            className='bg-green-400 p-2 m-4 rounded-lg '
            onClick={() =>{
                ref.current =ref.current + 1;
                console.log("ref = "+ ref.current);
            }}
            >Increase Ref</button>
            <span className='font-bold text-lg'>Ref = {ref.current}</span>
        </div>

        <button 
            className='bg-red-700 p-4 m-4 text-white font-bold rounded-lg'
            onClick={() =>{
                clearInterval(timer.current);
            }}
            >Stop printing</button>
    </div>
  )
}

export default Demo2;