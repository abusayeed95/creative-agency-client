import React from 'react';
import { useParams } from 'react-router-dom';
import OrderHistory from '../../Admin/OrderHistory/OrderHistory';
import OrderForm from '../../ManageOrder/OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {


    return (
        <section>

            <div className="row">
                <div >
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-6">
                    <OrderHistory></OrderHistory>
                </div>
            </div>

        </section>
    );
};

export default Dashboard;