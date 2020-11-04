import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import webDesign from '../../../images/icons/web-design.png';

const ServiceList = () => {

    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email, photoURL } = loggedInUser;

    useEffect(() => {
        fetch(`http://localhost:5000/specificOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    // console.log('order history', order);

    return (
        <div className="container-fluid row">

            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>


            {/* <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}> */}
            <div className="col-md-10" style={{ height: '100vh', background: '#F4F7FC' }}>

                {/* <div className="pt-5 ml-5 d-flex justify-content-between">
                    <h1 >Order History</h1>
                    <h3 className="mr-5">{name}</h3>
                </div> */}
                <div className="d-flex align-items-center dashboardHeaderBg p-5">
                    <h1>Order History</h1>
                    <div class="ml-auto">
                        <div className="row align-items-center">
                            <h5>{name}</h5>
                            <img src={photoURL} alt="" className="mx-3 rounded-circle" width="60" />
                        </div>
                    </div>
                </div>

                <div className="customFormStyle ">

                    <div className="bg-white p-5">
                        <div>
                            {
                                order.map(service => <div>

                                    {/* <img src={`data:image/png;base64,${service.img.img}`} style={{ width: '10vw', height: '15vh' }} class="card-img-top" alt="..." /> */}
                                    <div className="row">
                                        <h5 class="card-title">{service.serviceName}</h5>
                                        <button className="btn btn-outline-info ml-5">{service.status}</button>
                                    </div>
                                    <p class="card-text my-5">{service.details}</p>
                                    <hr />
                                </div>)
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div >
    );
};

export default ServiceList;