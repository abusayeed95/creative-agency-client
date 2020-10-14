import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ServiceList = () => {
    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <h2 className="pt-5 ml-5" >Order History</h2>

                <div className="customFormStyle">
                    <div className="bg-white p-5">
                        <div className="">
                            <img src="" alt="" />
                            <h3>Web & Mobile design</h3>
                            <p className="text-secondary">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>
                    </div>

                </div>

        </div>
        </div >
    );
};

export default ServiceList;