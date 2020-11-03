import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email, photoURL } = loggedInUser;

    // const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        data.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        console.log('service data', data);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            // headers: { 'content-type': 'application/json' },
            // body: JSON.stringify(data)
            body: formData
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Service Added Successfully!')
                }
            })
            .catch(err => console.log(err))
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>

                <div className="pt-5 ml-5 d-flex justify-content-between">
                    <h1>Add Service</h1>
                    <h3 className="mr-5">{name}</h3>
                </div>

                <form onSubmit={onSubmit} className="customFormStyle" >
                    
                    <div className="bg-white p-5" style={{ width: '800px' }}>

                        <div className="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <label htmlFor="">Service Title</label>
                                    <input onChange={handleBlur} type="text" name="title" className="form-control form-control-lg" placeholder="Enter title" />
                                </div>
                                <div class="col">
                                    {/* <input type="file" className="btn btn-success w-100 form-control-lg btnUploadFile"> Upload Image </input> */}
                                    <input onChange={handleFileChange} type="file" className="btn w-100 form-control-lg btnUploadFile form-control" /> Upload Image
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea onChange={handleBlur} type="text" name="description" className="form-control" cols="30" rows="6" placeholder="Enter Description"></textarea>
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