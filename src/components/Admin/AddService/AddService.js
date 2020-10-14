import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <h2 className="pt-5 ml-5" >Add Service</h2>

                <form action="" className="customFormStyle">
                    {/* <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your email address" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Graphic Design" />
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="6" placeholder="Project Details"></textarea>
                    </div> */}

                    <div className="bg-white p-5" style={{ width: '800px' }}>
                        <div className="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <label htmlFor="">Service Title</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter title" />
                                </div>
                                <div class="col">
                                    <button type="file" className="btn btn-success w-100 form-control-lg btnUploadFile"> Upload Image </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea name="" className="form-control" id="" cols="30" rows="6" placeholder="Enter Description"></textarea>
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