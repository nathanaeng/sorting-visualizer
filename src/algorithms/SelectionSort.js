import React from 'react';
import { useEffect } from 'react';

const SelectionSort = ({ arr, render }) => {
  let dur = 100;
  // console.log(arr);

  function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }

  async function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
      let minIdx = i;
      for(let j=i+1; j<arr.length; j++) {
        if(arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      await new Promise(resolve => setTimeout(resolve, dur));
      swap(arr, minIdx, i);
      // console.log(arr);
      render(arr);
    }
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
