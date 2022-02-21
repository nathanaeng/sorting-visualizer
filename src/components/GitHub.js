import React from 'react';

const GitHub = () => {
  function resetSelect() {
    document.querySelector('.form-select').value = 'Choose Algorithm';
  }
  
  return(
    <div className="center">
      <div className="github-container">
        <a className="github" href="https://github.com/nathanaeng/sorting-visualizer" onClick={resetSelect}>GitHub</a>
      </div>
    </div>
  );
};

export default GitHub;
