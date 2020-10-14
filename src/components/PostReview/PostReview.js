import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const PostReview = () => {
    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <h2 className="pt-5 ml-5" >Review</h2>

                <form action="" className="customFormStyle">
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Company’s name, Designation" />
                    </div>

                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="6" placeholder="Description"></textarea>
                    </div>

                    <button type="submit" class="btn btnSubmit" >Submit</button>

                </form>
            </div>
        </div>

    );
};

export default PostReview;