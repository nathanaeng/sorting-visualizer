import React from 'react';
import SelectionSort from '../algorithms/SelectionSort';

const Algorithm = ({ name, arr, render }) => {
    if(name === "Selection Sort") {
        return(<SelectionSort arr={arr} render={render}/>);
    } else {
        return(<div>No algorithm selected</div>);
    }
};

export default Algorithm;
