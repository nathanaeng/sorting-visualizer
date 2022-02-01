import React from 'react';

const Select = ({ label, options }) => {
    return(
    <select className="form-select" defaultValue={label}>
        {label ? <option disabled>{label}</option> : ""}
        {options.map(option => (<option key={option} value={option}>{option}</option>))}
    </select>
    );
};

export default Select;
