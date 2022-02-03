import React from 'react';
import Bar from './Bar';

const Array = ({ arr, size }) => {
    return(
        <div className="center">
            <div className="array-background" style={{width: "90%", marginTop: "5rem"}}>
                <div className="array-grid" style={{gridTemplateColumns: `repeat(${size}, auto)`}}>
                    {arr.map((element, index) => <div key={index} style={{gridColumn: `${index+1}`}}><Bar value={element}/></div>)}
                </div>
            </div>
        </div>
    );
};

export default Array;
