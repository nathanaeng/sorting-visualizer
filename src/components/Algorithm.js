import React from 'react';
import NoneSelected from '../algorithms/NoneSelected';
import SelectionSort from '../algorithms/SelectionSort';
import BubbleSort from '../algorithms/BubbleSort';
import InsertionSort from '../algorithms/InsertionSort';
import QuickSort from '../algorithms/QuickSort';

const Algorithm = ({ name, arr, render }) => {
if(name === "Selection Sort") {
        return(<SelectionSort arr={arr} render={render}/>);
    } else if(name === "Bubble Sort") { 
        return(<BubbleSort arr={arr} render={render}/>);
    } else if(name === "Insertion Sort") { 
        return(<InsertionSort arr={arr} render={render}/>);
    } else if(name === "Quick Sort") { 
        return(<QuickSort arr={arr} render={render}/>);
    } else {
        return(<NoneSelected/>);
    }
};

export default Algorithm;
