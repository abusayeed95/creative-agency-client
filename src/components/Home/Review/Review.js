import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Review = ({ reviewData }) => {
    // console.log('review Data api', reviewData);
    const { image, name, company, description } = reviewData;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const userInfo = loggedInUser;
    console.log('logged In User info', userInfo);

    return (
        <div className="card">
            <div className="mt-3 d-flex  align-items-center">
                <img className="mx-3" src={image} alt="" width="60" />
                <div>
                    <h6>{name}</h6>
                    <p className="m-0">{company}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default Review;