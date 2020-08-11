import React from 'react';
import './ContactInfo.css';

const ContactInfo = props => {
    return (
        <div className='contact-info'>
            {/* <form> */}
                <h4>Personal information</h4>
                <div className='row form-group'>
                    <label className="col-md-3">Firstname:</label>
                    <div className="col-md-9">
                        <input className="form-control" type="text" placeholder="Default input" />
                    </div>
                </div>
                <div className='row form-group'>
                    <label className="col-md-3">Lastname:</label>
                    <div className="col-md-9">
                        <input className="form-control" type="text" placeholder="Default input" />
                    </div>
                </div>
                <div className='row form-group'>
                    <label className="col-md-3">Country:</label>
                    <div className="col-md-9">
                        <input className="form-control" type="text" placeholder="Default input" />
                    </div>
                </div>
                <div className='row form-group'>
                    <label className="col-md-3">City:</label>
                    <div className="col-md-9">
                        <input className="form-control" type="text" placeholder="Default input" />
                    </div>
                </div>
                <div className='row form-group'>
                    <label className="col-md-3">Post code:</label>
                    <div className="col-md-9">
                        <input className="form-control" type="text" placeholder="Default input" />
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Order</button>
                </div>
            {/* </form> */}
        </div>
    );
}

export default ContactInfo;