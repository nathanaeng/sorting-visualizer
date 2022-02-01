import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {

  let algorithm;
  let size;
  
  // randomly generated array with values between 0-100
  let array = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

  useEffect(() => {
    // Display array
    document.querySelector('.array').innerHTML = `<h1>${array}</h1>`;
    
    const algorithms = document.querySelector('.algorithms').firstElementChild;
    algorithms.addEventListener('change', () => {
      algorithm = algorithms.value
      console.log(algorithm);
    });

    const sizes = document.querySelector('.sizes').firstElementChild;
    sizes.addEventListener('change', () => {
      size = Number(sizes.value.split(' ')[1]);
      updateArray();
    });
  });

  function updateArray() {
    array = Array.from({length: size}, () => Math.floor(Math.random() * 100));
    document.querySelector('.array').innerHTML = `<h1>${array}</h1>`;
  }

  return (
    <div>
      <Header updateArray={updateArray}/>
      <div className="array" style={{wordWrap: "break-word"}}></div>
    </div>
  );
}

export default App;
