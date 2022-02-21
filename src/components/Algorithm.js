import React from 'react';
import NoneSelected from '../algorithms/NoneSelected';
import SelectionSort from '../algorithms/SelectionSort';
import BubbleSort from '../algorithms/BubbleSort';
import InsertionSort from '../algorithms/InsertionSort';
import QuickSort from '../algorithms/QuickSort';
import MergeSort from '../algorithms/MergeSort';
import HeapSort from '../algorithms/HeapSort';

const Algorithm = ({ name, arr, setFrames }) => {
    // console.log(name);

    if(name === "Selection Sort") {
        return(<SelectionSort arr={arr} setFrames={setFrames}/>);
    } else if(name === "Bubble Sort") { 
        return(<BubbleSort arr={arr} setFrames={setFrames}/>);
    } else if(name === "Insertion Sort") { 
        return(<InsertionSort arr={arr} setFrames={setFrames}/>);
    } else if(name === "Quick Sort") { 
        return(<QuickSort arr={arr} setFrames={setFrames}/>);
    } else if(name === "Merge Sort") { 
        return(<MergeSort arr={arr} setFrames={setFrames}/>);
    } else if(name === "Heap Sort") { 
        return(<HeapSort arr={arr} setFrames={setFrames}/>);
    } else if(name === "Choose Algorithm") {
        return(<NoneSelected/>);
    } else {
        return null;
    }
};

export default Algorithm;
