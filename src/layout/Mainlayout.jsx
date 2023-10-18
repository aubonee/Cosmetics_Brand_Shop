import React from 'react';
import { Outlet } from 'react-router-dom';
const Mainlayout = () => {
    return (
        <div>
            <h2>navbar</h2>
            <Outlet></Outlet>
            <h2>footer</h2>
        </div>
    );
};

export default Mainlayout;