import React, { useLayoutEffect } from 'react';

const MergeSort = ({ arr, setFrames }) => {
  const frames = [];
  frames.push([...arr]);

  function mergeSort(arr, l, r) {
    if(l>=r) {
        return;
    }
    var m = l + parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
  }

  function merge(arr, l, m, r) {
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
        arr[k] = L[i];
        frames.push([...arr]);
        i++;
      }
      else {
        arr[k] = R[j];
        frames.push([...arr]);
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
    frames.push([...arr]);
  }

  function play() {
    mergeSort(arr, 0, arr.length-1);
    setFrames(frames);
  }

  useLayoutEffect(() => play());

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">Merge Sort</div>
        <div className="description">
          Merge sort is an in-place, stable divide and conquer sorting algorithm. The array is divided into n sublists, each containing one element. Then, repeatedly merge sublists to produce new sorted sublists until only one sublist remains.
        </div>
        <div className="complexity">Average time complexity: O(nlogn)</div>
        <div className="complexity">Worst-case time complexity: O(nlogn)</div>
        <div className="complexity">Best-case time complexity: O(nlogn)</div>
        <div className="complexity">Worse-case space complexity: O(n)</div>
        <div className="description-bottom"></div>
      </div>
    </div>
  );
};

export default MergeSort;
