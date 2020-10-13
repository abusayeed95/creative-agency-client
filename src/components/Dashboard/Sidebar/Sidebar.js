import React from 'react';
import logo from '../../../images/logos/logo.png';



const Sidebar = () => {
    return (

        <div className="d-flex flex-column p-5" style={{ height: "100vh" }}>
            <a className="navbar-brand" href="/dashboard">
                <img src={logo} alt="" style={{ height: '50px' }} />
            </a>

            <ul className="dashboard-menu ">
                <li><a href="/orderForm">Order</a></li>
                <li><a href="#">Service list</a></li>
                <li><a href="/postReview">Review</a></li>
            </ul>
        </div>

    );
};

export default Sidebar;