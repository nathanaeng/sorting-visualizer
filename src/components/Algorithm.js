import React from 'react';
import NoneSelected from '../algorithms/NoneSelected';
import SelectionSort from '../algorithms/SelectionSort';
import BubbleSort from '../algorithms/BubbleSort';
import InsertionSort from '../algorithms/InsertionSort';
import QuickSort from '../algorithms/QuickSort';
import MergeSort from '../algorithms/MergeSort';

const Algorithm = ({ name, arr, render }) => {
    if(name === "Selection Sort") {
            return(<SelectionSort arr={arr} render={render}/>);
        } else if(name === "Bubble Sort") { 
            return(<BubbleSort arr={arr} render={render}/>);
        } else if(name === "Insertion Sort") { 
            return(<InsertionSort arr={arr} render={render}/>);
        } else if(name === "Quick Sort") { 
            return(<QuickSort arr={arr} render={render}/>);
        } else if(name === "Merge Sort") { 
            return(<MergeSort arr={arr} render={render}/>);
        } else if(name === "Choose Algorithm") {
            return(<NoneSelected/>);
        } else {
            return null;
        }
    };

export default Algorithm;
