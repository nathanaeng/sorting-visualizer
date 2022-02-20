import React from 'react';

const Bar = ({ value, size }) => {
    return(
        <div className="bar" style={{height: `${4*value}px`, width: `${size}%`}}></div>
    );
};

export default Bar;
