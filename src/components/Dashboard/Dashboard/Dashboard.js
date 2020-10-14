import React from 'react';
import { useParams } from 'react-router-dom';
import OrderForm from '../../ManageOrder/OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {


    return (
        <section>

            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
            </div>

        </section>
    );
};

export default Dashboard;