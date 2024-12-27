import React, { useState } from 'react';

const HuntItem = ({ item, increaseCount }) => {
    const [val, setVal] = useState('');

    const nextHandle = () => {
        console.log("HERE");
        if (val.toLowerCase() === item.answer.toLowerCase()) {
            increaseCount();
            setVal('')
            // Call the function properly with parentheses
        } else {
            setVal('');
        }
    };

    return (
        <div className="flex flex-col w-full py-20">
            {item.poem.map((line, index) => (
                <p key={index} className="font-test text-center text-5xl">{line}</p>
            ))}

            <p className='mt-10 text-center font-serif text-2xl'>{item.question}</p>

            <div className='flex justify-center mt-5'>
                <input
                    type='text'
                    value={val}
                    onChange={(e) => setVal(e.target.value)} // Fix the input change handler
                />
                <button
                    className="bg-red-500 hover:bg-red-700 text-white text-4xl font-serif font-bold py-2 px-4 rounded"
                    onClick={nextHandle}>Next</button>
            </div>
        </div>
    );
};

export default HuntItem;
