import React from 'react';
import { swap } from './swap';

const BubbleSort = ({ arr, setFrames }) => {
  let dur = 50;
  const frames = [];
  frames.push([...arr]);

  function bubbleSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
      for(let j=0; j<arr.length-i-1; j++) {
        if(arr[j] > arr[j+1]) {
          swap(arr, j, j+1);
          frames.push([...arr]);
        }
      }
    }
  }

  function play() {
    bubbleSort(arr);
    setFrames(frames, dur);
  }

  document.querySelector('.play').onclick = play;

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">Bubble Sort</div>
        <div className="description">
          Bubble sort is a simple in-place, stable sorting algorithm which repeatedly swaps adjacent elements if they are in the wrong order - this creates a "bubble" as the elements are shifted to the top of the array. Although the average time complexity is the same as algorithms such as selection sort, bubble sort becomes increasingly inefficient with larger arrays.
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

export default BubbleSort;
