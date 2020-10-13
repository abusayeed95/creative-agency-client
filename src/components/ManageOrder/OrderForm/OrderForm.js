import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const OrderForm = () => {
    return (
        <div className="row">

            <Sidebar></Sidebar>

            <div style={{ height: '100vh', width: '70%', background: '#F4F7FC' }}>

                <div>
                    <h2 className="pt-5">Order</h2>
                </div>

                <form action="" className="customFormStyle">
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your name / company’s name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your email address" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Graphic Design" />
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" rows="6" placeholder="Project Details"></textarea>
                    </div>

                    <div className="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="text" className="form-control form-control-lg" placeholder="Graphic Design" />
                            </div>
                            <div class="col">
                                <button type="file" className="btn btn-success w-100 form-control-lg btnUploadFile"> Upload project file </button>
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