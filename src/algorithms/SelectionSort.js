import React from 'react';
import { useEffect } from 'react';

const SelectionSort = ({ arr }) => {
  function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }

  function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
      let minIdx = i;
      for(let j=i+1; j<arr.length; j++) {
        if(arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      swap(arr, minIdx, i);
    }
    document.querySelector('.array').innerHTML = `<h1>${arr}</h1>`;
  }

  useEffect(() => {
    document.querySelector('.play').addEventListener('click', () => {
      selectionSort(arr);
    });
  });

  return(
    <div>
      <h1>Selection Sort</h1>
    </div>
  );
};

export default SelectionSort;
