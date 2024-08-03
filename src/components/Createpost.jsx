import React from 'react'

const Createpost = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-control">Post A Message</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button-btn className="btn-success">POST</button-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createpost