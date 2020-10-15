import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('https://fierce-cliffs-21804.herokuapp.com/adminEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Email Added Successfully!!')
                }
            })


    }

    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <h2 className="pt-5 ml-5" >Add Admin</h2>

                <div className="customFormStyle">
                    <div className="form-group bg-white p-5" style={{ width: '800px' }}>

                        <label htmlFor="">Email</label>
                        <p>{errors.email && <span className="text-danger">This field is required</span>}</p>
                        <form class="form-inline" onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-group mx-sm-3 mb-2">
                                <input type="email" ref={register({ required: true })} name="email" class="form-control" id="" placeholder="jon@gamil.com" />
                            </div>
                            <button type="submit" class="btn btn-success mb-2">Submit</button>

                        </form>
                    </div>
                </div>




            </div>
        </div >
    );
};

export default MakeAdmin;