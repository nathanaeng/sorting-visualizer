import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Controls from './components/Controls';
import MyArray from './components/MyArray';
import Algorithm from './components/Algorithm';
import SelectionSort from './algorithms/SelectionSort';

function App() {
  // randomly generated array with values between 0-100
  const [array, setArray] = useState(Array.from({length: 5}, () => Math.floor(Math.random() * 100)));
  const [size, setSize] = useState(5);

  function updateAlgorithm(algorithm) {
    // Unmount previous algorithm component being rendered
    ReactDOM.unmountComponentAtNode(document.querySelector('.algorithm'));
    switch(algorithm) {
      case 'Selection Sort':
        ReactDOM.render(<SelectionSort arr={array}/>, document.querySelector('.algorithm'));
        break;
      default:
        document.querySelector('.algorithm').innerHTML = `No algorithm selected`;
    }
  }

  function updateSize(n) {
    setSize(n);
  }

  function updateArray() {
    setArray(Array.from({length: size}, () => Math.floor(Math.random() * 100)));
  }

  useEffect(() => {
    updateArray();
  }, [size]);

  useEffect(() => {
    updateAlgorithm(document.querySelector('.algorithms').firstElementChild.value);
  }, [array]);

  return (
    <div>
      <Header updateArray={updateArray} updateAlgorithm={updateAlgorithm} updateSize={updateSize}/>
      <div className="array">
        <MyArray arr={array} size={size}/>
      </div>
      <Controls />
      <div className="algorithm">
        No algorithm selected
        {/* <SelectionSort arr={array}/> */}
      </div>
    </div>
  );
}

export default App;
