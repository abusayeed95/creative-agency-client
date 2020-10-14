import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <h2 className="pt-5 ml-5" >Add Admin</h2>


                {/* <form action="" className="customFormStyle">

                    <div className="bg-white p-5" style={{ width: '800px' }}>
                        <div className="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="form-control" placeholder="jon@gamil.com" />
                                </div>
                                <div class="col">
                                    <button type="file" className="btn btn-success form-control"> Submit </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form> */}

                <div className="customFormStyle">
                    <div className="form-group bg-white p-5" style={{ width: '800px' }}>

                        <label htmlFor="">Email</label>

                        <form class="form-inline">

                            <div class="form-group mx-sm-3 mb-2">
                                <input type="email" class="form-control" id="" placeholder="jon@gamil.com" />
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