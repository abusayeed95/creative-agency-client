import React, { useEffect, useState } from 'react';
import AllOrder from '../../ManageOrder/AllOrder/AllOrder';
import Admin from '../Admin/Admin';



/* const fakeData = [
    {
        id: 0,
        image: 'https://i.imgur.com/7G4sl1N.png',
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
    },
    {
        id: 1,
        image: 'https://i.imgur.com/EkkUahl.png',
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    },
    {
        id: 2,
        image: 'https://i.imgur.com/5yUhUZQ.png',
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    }
] */


const OrderHistory = () => {

    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('https://fierce-cliffs-21804.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (

        <div style={{ height: '100vh', background: '#F4F7FC' }} className="p-5">
            <div>
                <h1>Services list</h1>
            </div>

            <div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div>
                {
                    order.map(data => <AllOrder data={data}></AllOrder>)
                }
            </div>


        </div>

    );
};

export default OrderHistory;