import React from 'react';
import { useEffect } from 'react';
import SelectionSort from '../algorithms/SelectionSort';

const Algorithm = ({ name, arr }) => {
    useEffect(() => {
        if(name === "Selection Sort") {
            return(<SelectionSort arr={arr}/>);
        } else {
            console.log(name);
        }
    }, [name]);

    return(<div>No algorithm selected</div>);
};

export default Algorithm;
