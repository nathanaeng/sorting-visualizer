import React from 'react';

const Select = ({ label, options }) => {
    document.addEventListener('scroll', () => console.log(1));
    document.addEventListener('keypress', () => console.log(1));
    // Toggle chevron rotation
    const toggleDisplay = (e) => {
        const select = e.target;
        if(select.classList.contains('open')) {
            select.classList.remove('open');
        } else {
            select.classList.add('open');
            document.addEventListener('click', click);
            document.addEventListener('scroll', scroll);
        }

        function click(e) {
            if(e.target !== select) {
                select.classList.remove('open');
                document.removeEventListener('click', click);
            }
        }

        function scroll(e) {
            console.log(1);
            select.classList.remove('open');
            document.removeEventListener('scroll', scroll);
        }

        function key(e) {
            select.classList.remove('open');
            console.log(1);
        }
    }

    return(
    <select className="form-select" defaultValue={label} onClick={toggleDisplay}>
        <option disabled>{label}</option>
        {options.map(option => (<option key={option} value={option}>{option}</option>))}
    </select>
    );
};

export default Select;
