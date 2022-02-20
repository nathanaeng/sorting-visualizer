import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Alert from '../components/Alert';

const NoneSelected = () => {
  const [alert, setAlert] = useState();

  function errorMessage() {
    ReactDOM.render(<Alert/>, document.querySelector('.alert-root'));
    setAlert(true);
    setTimeout(() => {
      if(document.querySelector('.alert')) {
        setAlert(false);
      }
      ReactDOM.unmountComponentAtNode(document.querySelector('.alert-root'));
    }, 3000);
  }

  useEffect(() => {
    document.querySelector('.play').addEventListener('click', () => {
      errorMessage();

      // Remove event listener to disable spam clicks
      let play = document.querySelector('.play');
      play.replaceWith(play.cloneNode(true));
    });
  }, [alert]);

  return(
    <div className="center">
      <div className="description-container">
        <div className="name">No algorithm selected</div>
        <div className="description">
          Please select a sorting algorithm from the drop-down menu at the top of the page.
        </div>
        <div className="description-bottom"></div>
      </div>
    </div>
  );
};

export default NoneSelected;
