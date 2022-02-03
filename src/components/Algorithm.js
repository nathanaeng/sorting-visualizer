import React from 'react';
import NoneSelected from '../algorithms/NoneSelected';
import SelectionSort from '../algorithms/SelectionSort';
import BubbleSort from '../algorithms/BubbleSort';

const Algorithm = ({ name, arr, render }) => {
    if(name === "Selection Sort") {
        return(<SelectionSort arr={arr} render={render}/>);
    } else if(name === "Bubble Sort") { 
        return(<BubbleSort arr={arr} render={render}/>);
    } else {
        return(<NoneSelected/>);
    }
};

export default Algorithm;
