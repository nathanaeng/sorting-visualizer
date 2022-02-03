import React from 'react';
import { useEffect } from 'react';
import { swap } from './swap';

const SelectionSort = ({ arr, render }) => {
  let dur = 100;

  async function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
      let minIdx = i;
      for(let j=i+1; j<arr.length; j++) {
        if(arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      // Delay swap animation
      await new Promise(resolve => setTimeout(resolve, dur));
      swap(arr, minIdx, i);
      render(arr);
    }
  }

  useEffect(() => {
    document.querySelector('.play').addEventListener('click', () => {
      selectionSort(arr);
    });
  });

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">Selection Sort</div>
        <div className="description">
          Selection sort is an in-place, non-stable sorting algorithm which maintains 2 partitions: unsorted and sorted. Selection sort repeatedly finds the minimum element from the unsorted partition and puts it in the leftmost position (assuming ascending-order) of the sorted partition by swapping. This is the most common method of sorting playing cards in your hand.
        </div>
        <div className="complexity">Average time complexity: O(n<sup>2</sup>)</div>
        <div className="complexity">Worst-case time complexity: O(n<sup>2</sup>)</div>
        <div className="complexity">Best-case time complexity: O(n<sup>2</sup>)</div>
        <div className="complexity">Worse-case space complexity: O(1)</div>
        <div className="description-bottom"></div>
      </div>
    </div>
  );
};

export default SelectionSort;
