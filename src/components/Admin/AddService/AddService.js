import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://fierce-cliffs-21804.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Service Added Successfully!')
                }
            })
    }

    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <h2 className="pt-5 ml-5" >Add Service</h2>

                <form className="customFormStyle" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="bg-white p-5" style={{ width: '800px' }}>

                        <div className="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <label htmlFor="">Service Title</label>
                                    <input type="text" ref={register({ required: true })} name="title" className="form-control form-control-lg" placeholder="Enter title" />
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                </div>
                                <div class="col">
                                    <button type="file" className="btn btn-success w-100 form-control-lg btnUploadFile"> Upload Image </button>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea type="text" ref={register({ required: true })} name="description" className="form-control" cols="30" rows="6" placeholder="Enter Description"></textarea>
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="row d-flex justify-content-end">
                            <button type="submit" class="btn btn-success" >Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddService;