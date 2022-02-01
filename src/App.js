import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {

  let algorithm;
  let size;

  useEffect(() => {
    const algorithms = document.querySelector('.algorithms').firstElementChild;
    algorithms.addEventListener('change', () => {
      algorithm = algorithms.value
      console.log(algorithm);
    });

    const sizes = document.querySelector('.sizes').firstElementChild;
    sizes.addEventListener('change', () => {
      size = Number(sizes.value.split(' ')[1]);
      console.log(size);
    });

  });

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
