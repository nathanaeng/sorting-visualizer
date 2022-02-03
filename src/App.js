import { useEffect, useState } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import MyArray from './components/MyArray';
import Algorithm from './components/Algorithm';

function App() {
  const [array, setArray] = useState(Array.from({length: 5}, () => Math.floor(Math.random() * 100)));
  const [size, setSize] = useState(5);
  const [algorithm, setAlgorithm] = useState("No algorithm selected");

  function updateAlgorithm(alg) {
    // Remove previous sort binding
    let play = document.querySelector('.play');
    play.replaceWith(play.cloneNode(true));

    setTimeout(() => setAlgorithm(alg), 0);
  }

  // Update number of elements in array
  function updateSize(n) {
    setSize(n);
  }

  // Generate new random array with values between 0-100
  function updateArray() {
    setArray(Array.from({length: size}, () => Math.floor(Math.random() * 100)));
    updateAlgorithm();
    updateAlgorithm(algorithm);
  }

  // Re-render array during sorting
  function renderArray(arr) {
    setArray(arr);
  }

  useEffect(() => {
    updateArray();
  }, [size]);

  useEffect(() => {
    const temp = [...array];
    renderArray(temp);
  }, [algorithm]);

  return (
    <div>
      <Header updateArray={updateArray} updateAlgorithm={updateAlgorithm} updateSize={updateSize}/>
      <div className="array">
        <MyArray arr={array} size={size}/>
      </div>
      <Controls />
      <Algorithm name={algorithm} arr={array} render={renderArray}/>
    </div>
  );
}

export default App;
