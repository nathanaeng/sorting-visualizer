import React from 'react';
import { FaPlay } from 'react-icons/fa'
import { BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs'

const Controls = ({ play }) => {
  return(
    <div className="center">
        <div className="controls">
            <button className="prev"><BsFillSkipStartFill style={{fontSize: "40px"}}/></button>
            <button className="play" onClick={play}><FaPlay style={{fontSize: "25px"}}/></button>
            <button className="next"><BsFillSkipEndFill style={{fontSize: "40px"}}/></button>
        </div>
    </div>
  );
};

export default Controls;
