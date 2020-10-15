import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderHistory from '../OrderHistory/OrderHistory';

const Admin = () => {

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