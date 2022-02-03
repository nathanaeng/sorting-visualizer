import React from 'react';
import { useEffect } from 'react';
import { swap } from './swap';

const QuickSort = ({ arr, render }) => {
  let dur = 100;

  async function quickSort(arr, low, high) {
    if(low < high) {
      let part = await partition(arr, low, high);

      quickSort(arr, low, part-1);
      quickSort(arr, part+1, high);
    }
    setTimeout(() => render(arr), 0);
  }

  async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low-1;

    for(let j=low; j <= high-1; j++) {
      if(arr[j] < pivot) {
        i++;
        await new Promise(resolve => setTimeout(resolve, dur));
        swap(arr, i, j);
        render(arr);
      }
    }
    await new Promise(resolve => setTimeout(resolve, dur));
    swap(arr, i+1, high);
    render(arr);
    return i+1;
  }

  useEffect(() => {
    document.querySelector('.play').addEventListener('click', () => {
      quickSort(arr, 0, arr.length-1);
    });
  });

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">Quick Sort</div>
        <div className="description">
          Quick sort is an in-place, un-stable divide and conquer sorting algorithm. It picks a pivot element and partitions the array into a high and low partition about the pivot element. Selecting the partition element can be done in several ways:
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
        <div className="complexity">Average time complexity: O(n<sup>2</sup>)</div>
        <div className="complexity">Worst-case time complexity: O(n<sup>2</sup>)</div>
        <div className="complexity">Best-case time complexity: O(n)</div>
        <div className="complexity">Worse-case space complexity: O(1)</div>
        <div className="description-bottom"></div>
      </div>
    </div>
  );
};

export default QuickSort;
