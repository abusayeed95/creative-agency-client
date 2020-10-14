import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const PostReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log('logged In User info', loggedInUser);

    const { name, email, photoURL } = loggedInUser;


    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        data.userPhoto = photoURL;

        console.log('gmail data', data);
        // insert review into database
        fetch('https://fierce-cliffs-21804.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review post successfully.')
                }
            })

    }

    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <div className="pt-5 ml-5">
                    <h1 >Review</h1>
                    <h3>Welcome, {name}</h3>
                </div>

                <form className="customFormStyle" onSubmit={handleSubmit(onSubmit)}>

                    {/* <img src={photoURL} alt="" ref={register({ required: true })} name="photoURL" /> */}

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" className="form-control form-control-lg" placeholder="Your name" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="company" className="form-control form-control-lg" placeholder="Company’s name, Designation" />
                        {errors.company && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="description" className="form-control" cols="30" rows="6" maxlength="100" placeholder="Description(max 100words)"></textarea>
                        {errors.description && <span className="text-danger">This field is required</span>}

                    </div>

                    <button type="submit" className="btn btnSubmit" >Submit</button>



                </form>
            </div>
        </div>

    );
};

export default PostReview;