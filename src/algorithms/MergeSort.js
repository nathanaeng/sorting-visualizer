import React from 'react';
import { useEffect } from 'react';

const MergeSort = ({ arr, render }) => {
  let dur = 30;

  async function mergeSort(arr,l, r) {
    if(l>=r){
        return;//returns recursively
    }
    var m = l + parseInt((r-l)/2);
    await mergeSort(arr,l,m);
    await mergeSort(arr,m+1,r);
    await merge(arr,l,m,r);
    setTimeout(() => render(arr), 0);
}

  async function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
  
    var L = new Array(n1); 
    var R = new Array(n2);
  
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    var i = 0;
    var j = 0;
    var k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        await new Promise(resolve => setTimeout(resolve, dur));
        arr[k] = L[i];
        render(arr);
        i++;
      }
      else {
        await new Promise(resolve => setTimeout(resolve, dur));
        arr[k] = R[j];
        render(arr);
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  useEffect(() => {
    document.querySelector('.play').addEventListener('click', () => {
      mergeSort(arr, 0, arr.length-1);
    });
  });

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">Merge Sort</div>
        <div className="description">
          Merge sort is an in-place, stable divide and conquer sorting algorithm. It picks a pivot element and partitions the array into a high and low partition about the pivot element. Selecting the pivot element can be done in several ways:
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

export default MergeSort;
