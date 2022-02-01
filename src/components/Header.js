import React from 'react';
import Select from './Select';
import { GrRefresh } from 'react-icons/gr';

const Header = () => {
    const algorithms = ["Selection Sort", "Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort", "Heap Sort", "Counting Sort", "Radix Sort"];
    const sizes = ["Size 5", "Size 10", "Size 25", "Size 50", "Size 100"];

    return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container-fluid">
        <div className="navbar-brand">Sorting Algorithm Visualizer</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
            <div className="nav-link refresh"><GrRefresh /></div>
            <div className="algorithms"><Select label="Choose Algorithm" options={algorithms}/></div>
            <div className="sizes"><Select options={sizes}/></div>
        </div>
        </div>
    </div>
    </nav>
    );
};

export default Header;