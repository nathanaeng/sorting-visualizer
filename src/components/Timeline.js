import React from 'react';

const Timeline = ({ index, length }) => {
    const total = (length-1)**2;

    // function scrub(e) {
    //     if(!document.querySelector('.no-alg')) {
    //         let pos = e.clientX;
    //         let width = e.target.getBoundingClientRect().width;
    //         let ratio = (pos / width) - 0.05;
    //         let goTo = Math.floor(length * ratio);
    //         if(goTo === length) goTo = length-1;

    //         setIndex(goTo);

    //         // e.stopImmediatePropagation();
    //     }
    // }

    return(
        <div className="center">
            <div className="timeline">
                <div className="timeline-fill" style={{width: `${(((index-1) * (length-1))/total)*100}%`}}></div>
            </div>
        </div>
    );
};

export default Timeline;
