import React from 'react';
import { FaPlay } from 'react-icons/fa'
import { BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs'

const Controls = ({ back, play, next, speed, toggleSpeed }) => {
  return(
    <div className="center">
        <div className="controls">
            <button className="prev" onClick={back}><BsFillSkipStartFill style={{fontSize: "40px"}}/></button>
            <button className="play" onClick={play}><FaPlay style={{fontSize: "25px"}}/></button>
            <button className="next" onClick={next}><BsFillSkipEndFill style={{fontSize: "40px"}}/></button>
            <button className="speed" onClick={toggleSpeed}>{speed + 1}x</button>
        </div>
    </div>
  );
};

export default Controls;
