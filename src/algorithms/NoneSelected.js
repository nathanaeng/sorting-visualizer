import React from 'react';

const NoneSelected = () => {
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
