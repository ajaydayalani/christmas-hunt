import './App.css';
import { useState, useRef } from 'react';
import hunt from "./hunt.json";
import HuntItem from './components/HuntItem';

const App = () => {
  const [landingVisble, setLandingVisable] = useState(true);
  const [huntOngoing, setHuntOngoing] = useState(false);

  const [count, setCount] = useState(0);
  const item = hunt[count];

  const handleClick = () => {
    setLandingVisable(false);
    setHuntOngoing(true)
  };

  const increaseCount = ()=>{
    if(count<4){
      setCount(count+1)
    }
    else if(count==4){
      setHuntOngoing(false)
    }
  }

  const Complete = () => {
    return (
      <>
        <div className="w-full pt-[20%]">
          <p className="font-test text-7xl text-center">Merry Christmas </p>
          <p className="font-test text-7xl text-center">You Have Board Games Galore</p>
        </div>
        
      </>
    );
  };

  const Landing = () => {
    return (
      <>
        <div className="w-full pt-10">
          <p className="font-test text-7xl text-center">Merry</p>
          <p className="font-test text-7xl text-center">Christmas</p>
        </div>
        <div className="flex justify-center content-center mt-[10%]">
          <button
            className="bg-red-500 hover:bg-red-700 text-white text-4xl font-serif font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Let's Begin
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-cover bg-center bg-[url('./4490938.jpg')]">
      {landingVisble && <Landing />}
      {huntOngoing && <HuntItem item={item} increaseCount={increaseCount}/>}
      {(!landingVisble && !huntOngoing) && <Complete/>}
    </div>
  );
};

export default App;
