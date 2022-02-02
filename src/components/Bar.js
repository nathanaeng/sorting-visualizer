import React from 'react';

const Bar = ({ value }) => {
    return(
        <div className="bar" style={{height: `${4*value}px`, width:`20px`}}></div>
    );
};

export default Bar;
