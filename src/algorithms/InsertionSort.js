import React from 'react';

const InsertionSort = ({ arr, setFrames }) => {
  let dur = 100;
  const frames = [];
  frames.push([...arr]); 

  function insertionSort(arr) {   
    let key, j;
    for(let i=1; i<arr.length; i++) {
      key = arr[i];
      j = i-1;
      
      while(j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j];
        j -= 1;
      }
      arr[j+1] = key;
      frames.push([...arr]);
    }
  }

  function play() {
    insertionSort(arr);
    setFrames(frames, dur);
  }

  document.querySelector('.play').onclick = play;

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">Insertion Sort</div>
        <div className="description">
          Insertion sort is an in-place, stable sorting algorithm which maintains 2 partitions: unsorted and sorted. Insertion sort iterates through an array, removes 1 element from the unsorted partition, and places it in the correct order in the sorted partiion. This process is repeated until the entire array is sorted.
        </div>
        <div className="complexity">Average time complexity: O(n<sup>2</sup>)</div>
        <div className="complexity">Worst-case time complexity: O(n<sup>2</sup>)</div>
        <div className="complexity">Best-case time complexity: O(n)</div>
        <div className="complexity">Worse-case space complexity: O(1)</div>
        <div className="description-bottom"></div>
      </div>
    </div>
  );
};

export default InsertionSort;
