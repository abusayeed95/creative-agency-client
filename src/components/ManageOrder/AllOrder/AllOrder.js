import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AllOrder = ({ allOrders }) => {

    const { _id, name, email, serviceName, details } = allOrders;

    const [all, setAll] = useState([])
    const [status, setStatus] = useState('status')

    const options = [
        { value: 'Pending', label: 'Pending' },
        { value: 'On Going', label: 'On Going' },
        { value: 'Done', label: 'Done' },
    ]

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                const da = data.map(d => ({ ...d, status: 'pending' }))

                setAll(da);
            })
    }, [])

    const change = (e, id) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.value })
        })

            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status updated successfully')
                }
            })
    }

    const defaultOption = options[0]; 

    return (

        <div>
            <table className="table table-hover bg-white">
                <tbody>
                    <tr key={_id}>
                        <th>{name}</th>
                        <td>{email}</td>
                        <td>{serviceName}</td>
                        <td className="col-md-2">{details}</td>
                        <td>
                            <Dropdown options={options} onChange={(e) => { change(e, `${_id}`) }} value={defaultOption} placeholder="Select an option" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllOrder;