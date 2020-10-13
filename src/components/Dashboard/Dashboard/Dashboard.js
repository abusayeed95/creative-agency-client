import React from 'react';
import { useParams } from 'react-router-dom';
import OrderForm from '../../ManageOrder/OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {


    return (
        <div className="row">
            {/* <div className="col-md-4 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div> */}

            <div className="col-md-2 col-sm-6 col-12">
                <OrderForm></OrderForm>
            </div>

        </div>
    );
};

export default Dashboard;