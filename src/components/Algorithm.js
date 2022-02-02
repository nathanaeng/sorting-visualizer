import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import SelectionSort from '../algorithms/SelectionSort';

const Algorithm = ({ name, arr }) => {
    useEffect(() => {
        return(<SelectionSort arr={arr}/>);
    }, [name, arr]);

    switch(name) {
        case 'Selection Sort':
          return(<SelectionSort arr={arr}/>);
        default:
            return(<div>No algorithm selected</div>)
    }
};

export default Algorithm;
