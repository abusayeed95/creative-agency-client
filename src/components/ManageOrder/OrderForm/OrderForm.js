import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderForm = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email, photoURL } = loggedInUser;

    const onSubmit = (data) => {
        data.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', loggedInUser.name);
        formData.append('email', loggedInUser.email);
        formData.append('serviceName', info.serviceName);
        formData.append('details', info.details);
        formData.append('price', info.price);

        console.log('user data', data);

        // insert order info to database
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Order has been send successfully.');
                }
            })
            .catch(err => console.log(err));
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
                    <h1 >Order</h1>
                    <h3 className="mr-5">{name}</h3>
                </div>

                <form onSubmit={onSubmit} className="customFormStyle" >

                    <div className="form-group">
                        <input type="text" onBlur={handleBlur} name="name" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                    </div>

                    <div className="form-group">
                        <input type="text" onBlur={handleBlur} name="email" className="form-control form-control-lg" placeholder="Your email address" />
                    </div>

                    <div className="form-group">
                        <input type="text" onBlur={handleBlur} name="serviceName" className="form-control form-control-lg" placeholder="Graphic Design" />

                    </div>

                    <div className="form-group">
                        <textarea type="text" onBlur={handleBlur} name="details" className="form-control" cols="30" rows="6" placeholder="Project Details"></textarea>
                    </div>

                    <div className="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="number" onBlur={handleBlur} name="price" className="form-control form-control-lg" placeholder="Price" />
                            </div>
                            <div class="form-row mt-3">
                                <input onChange={handleFileChange} type="file" className="btn w-100 form-control-lg btnUploadFile form-control" /> Upload project file
                                <span className="text-secondary">*Optional</span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btnSubmit" >Submit</button>

                </form>
            </div>
        </div>






    );
};

export default OrderForm;