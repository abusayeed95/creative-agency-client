import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const PostReview = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-9">
                <h1>Review</h1>
            </div>
        </div>
    );
};

export default PostReview;