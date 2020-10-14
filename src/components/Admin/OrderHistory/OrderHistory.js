import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';



const fakeData = [
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
]


const OrderHistory = () => {

    /* const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('https://fierce-cliffs-21804.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []) */

    return (

        <div>
            <h1>Order List</h1>
        </div>

    );
};

export default OrderHistory;