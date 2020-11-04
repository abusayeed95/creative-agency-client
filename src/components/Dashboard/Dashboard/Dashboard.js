import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

    const containerStyle = {
        height: "100%",
    }

    return (
        <section>

            {/* <div className="row">
                <div >
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-6">
                    <OrderHistory></OrderHistory>
                </div>
            </div> */}

            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10">
                    <h1 className="text-center mt-5 bg-light">Welcome to Dashboard</h1>
                </div>
            </div>



        </section>
    );
};

export default Dashboard;