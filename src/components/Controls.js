import React, { useLayoutEffect } from 'react';
import { BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs';
import { GrRefresh } from 'react-icons/gr';

const Controls = ({ back, play, next, speed, toggleSpeed, reset, playing }) => {
  useLayoutEffect(() => {
    if(playing) {
      document.querySelector('.play').classList.add('pause');
    } else {
      document.querySelector('.play').classList.remove('pause');
    }
  });

  return(
    <div className="center">
        <div className="controls">
            <button className="reset" onClick={reset}><GrRefresh/></button>
            <button className="prev" onClick={back}><BsFillSkipStartFill style={{fontSize: "40px"}}/></button>
            <button className="play" onClick={play}></button>
            <button className="next" onClick={next}><BsFillSkipEndFill style={{fontSize: "40px"}}/></button>
            <button className="speed" onClick={toggleSpeed}>{speed + 1}x</button>
        </div>
    </div>
  );
};

export default Controls;
