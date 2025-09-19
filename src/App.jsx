import React from 'react';
import Counter from './Counter';

export default function App() {
  // const handelclik = (num) => {
  //   const number = num + 5;
  //   alert(
  //     `Your number was 5 and your button number was 50. When you clicked the button, your number ${num} + 5 = ${number}`
  //   );
  // };


  return (
    <div>
      <div className="text-center">
        <h1>useStste hook</h1>
        <Counter />
        {/* <button
          onClick={() => handelclik(50)}
          className="p-4 border-2 border-red-600 rounded-xl mt-5 cursor-pointer hover:bg-cyan-500 hover:border-none w-20 h-20 transition duration-1000"
        >
          click
        </button> */}
      </div>

    
    </div>
  );
}
