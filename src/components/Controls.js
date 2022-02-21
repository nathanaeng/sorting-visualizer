import React, { useEffect } from 'react';
import { BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs';
import { GrRefresh } from 'react-icons/gr';

const Controls = ({ back, play, next, speed, toggleSpeed, reset, playing }) => {
  useEffect(() => {
    if(playing) {
      document.querySelector('.play').innerHTML = '<svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"/></svg>';
    } else {
      document.querySelector('.play').innerHTML = '<svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>';
    }
  }, [playing]);

  function disableHighlight() {
    document.body.classList.add('no-highlight');
    var reset = window.setTimeout(() => document.body.classList.remove('no-highlight'), 300);
    window.clearTimeout(reset);
    reset = window.setTimeout(() => document.body.classList.remove('no-highlight'), 300);
  }

  return(
    <div className="center">
        <div className="controls" onClick={disableHighlight}>
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
