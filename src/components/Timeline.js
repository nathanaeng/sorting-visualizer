import React from 'react';

const Timeline = ({ index, length }) => {
    const total = (length-1)**2;
    return(
        <div className="center">
            <div className="timeline">
                <div className="timeline-fill" style={{width: `${(((index-1) * (length-1))/total)*100}%`}}></div>
            </div>
        </div>
    );
};

export default Timeline;
