import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Controls from './components/Controls';
import Bar from './components/Bar';
import SelectionSort from './algorithms/SelectionSort';

function App() {
  let algorithm;
  let size = 5;
  
  // randomly generated array with values between 0-100
  let array = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

  useEffect(() => {
    // Display array
    document.querySelector('.array').innerHTML = `<h1>${array}</h1>`;
    
    document.querySelector('.algorithms').firstElementChild.addEventListener('change', e => {
      algorithm = e.target.value;
      updateAlgorithm();
      console.log(algorithm);
    });

    document.querySelector('.sizes').firstElementChild.addEventListener('change', e => {
      size = Number(e.target.value.split(' ')[1]);
      updateArray();
    });
  });

  function updateAlgorithm() {
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

  function updateArray() {
    array = Array.from({length: size}, () => Math.floor(Math.random() * 100));
    document.querySelector('.array').innerHTML = `<h1>${array}</h1>`;

    // Refresh algorithm component
    updateAlgorithm();
  }

  return (
    <div>
      <Header updateArray={updateArray}/>
      <div className="array" style={{wordWrap: "break-word"}}></div>
      <Controls />
      <div className="algorithm">No algorithm selected</div>
    </div>
  );
}

export default App;
