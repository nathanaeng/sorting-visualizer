import React from 'react';
import { useEffect } from 'react';
import { swap } from './swap';

const HeapSort = ({ arr, render }) => {
  let dur = 30;

  async function heapSort(arr) {
    let n = arr.length;
 
    // Build max heap
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
      await heapify(arr, n, i);

    // Heap sort
    for (var i = n - 1; i > 0; i--) {
      await new Promise(resolve => setTimeout(resolve, dur));
      swap(arr, 0, i);
      render(arr);
      // Heapify root element to get highest element at root again
      await heapify(arr, i, 0);
    }
    setTimeout(() => render(arr), 0);
  }

  async function heapify(arr, n, i) {
    // Find largest among root, left, and right child
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < n && arr[left] > arr[largest])
      largest = left;

    if (right < n && arr[right] > arr[largest])
      largest = right;

    // Swap and recursively heapify if root is not largest
    if (largest != i) {
      await new Promise(resolve => setTimeout(resolve, dur));
      swap(arr, i, largest);
      render(arr);
      await heapify(arr, n, largest);
    }
}

  useEffect(() => {
    document.querySelector('.play').addEventListener('click', () => {
      heapSort(arr);
    });
  });

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">Heap Sort</div>
        <div className="description">
          Heap sort is an in-place, unstable sorting algorithm similar to selection sort but uses the heap data structure to find the minimum element (rather than a linear-time search). The minimum element is placed at the beginning of the array repeatedly until the array is sorted.
          <br></br>
          <br></br>
          1. Call heapify() on the array which builds a heap in O(n) operations<br></br>
          2. Swap the first element in the array with the final element. Decrement the heap size by 1.<br></br>
          3. Repeat step 2 until the size of the heap = 1.<br></br>
          <br></br>
        </div>
        <div className="complexity">Average time complexity: O(nlogn)</div>
        <div className="complexity">Worst-case time complexity: O(nlogn)</div>
        <div className="complexity">Best-case time complexity: O(nlogn)</div>
        <div className="complexity">Worse-case space complexity: O(1)</div>
        <div className="description-bottom"></div>
      </div>
    </div>
  );
};

export default HeapSort;
