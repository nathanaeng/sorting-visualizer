import React from 'react';

const GitHub = () => {
  function resetSelect() {
    document.querySelector('.form-select').value = 'Choose Algorithm';
  }
  
  return(<a className="github" href="https://github.com/nathanaeng/sorting-visualizer" onClick={resetSelect}>GitHub</a>);
};

export default GitHub;
