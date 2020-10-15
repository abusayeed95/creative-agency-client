import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderHistory from '../OrderHistory/OrderHistory';

const Admin = ({ fakeinfo }) => {

    console.log('admin page');

    console.log('fakedata', fakeinfo);

    return (
        <div className="row">

            <div>
                <Sidebar></Sidebar>
            </div>

            <div>
                <OrderHistory></OrderHistory>
            </div>
        </div>
    );
};

export default Admin;