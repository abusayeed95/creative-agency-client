import React from 'react';
import './AllServices.css';

const AllServices = ({ allServices }) => {

    const { image, title, description } = allServices;

    return (
        <div className="card services-card">
            <div className="card-body">
                <img src={image} alt="" style={{ height: '40px' }} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default AllServices;