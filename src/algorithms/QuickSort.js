import React, { useLayoutEffect } from 'react';
import { swap } from './swap';

const QuickSort = ({ arr, setFrames }) => {
  const frames = [];
  frames.push([...arr]);

  function quickSort(arr, low, high) {
    if(low < high) {
      let part = partition(arr, low, high);

      quickSort(arr, low, part-1);
      quickSort(arr, part+1, high);
    }
  }

  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low-1;

    for(let j=low; j <= high-1; j++) {
      if(arr[j] < pivot) {
        i++;
        swap(arr, i, j);
        frames.push([...arr]);
      }
    }
    swap(arr, i+1, high);
    frames.push([...arr]);
    return i+1;
  }

  function play() {
    quickSort(arr, 0, arr.length-1);
    setFrames(frames);
  }

  useLayoutEffect(() => play());

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">Quick Sort</div>
        <div className="description">
          Quick sort is an in-place, unstable divide and conquer sorting algorithm. It picks a pivot element and partitions the array into a high and low partition about the pivot element. Selecting the pivot element can be done in several ways:
          <br></br>
          <br></br>
          1. Pick the first element<br></br>
          2. Pick the last element<br></br>
          3. Pick a random element<br></br>
          4. Pick the median element<br></br>
          <br></br>
          From there, elements in the array are reordered so that all elements with a value less than the pivot come before the pivot and all values that are greater that the pivot go after the pivot. This is called{' '}
          <em>partitioning</em>. Recursively apply previous steps to low and high partitions.
        </div>
        <div className="complexity">Average time complexity: O(nlogn)</div>
        <div className="complexity">Worst-case time complexity: O(n<sup>2</sup>)</div>
        <div className="complexity">Best-case time complexity: O(nlogn)</div>
        <div className="complexity">Worse-case space complexity: O(logn)</div>
        <div className="description-bottom"></div>
      </div>
    </div>
  );
};

export default QuickSort;
