import React from 'react'

function ServiceForm() {
    return (
        <div className="row" style={{paddingTop:'50px'}}>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <div className="card card-container" >
            <Form>
                <div>
                  <div className="form-group" style={{textAlign:'center'}}>
                    <label htmlFor="appointmentDate">Booking Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="appointmentDate"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="FromId">From:</label>
                    <select className="form-control" id="FromId">
                        <option>Delhi</option>
                        <option>Hyderabad</option>
                        <option>Pune</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ToId">To:</label>
                    <select className="form-control" id="ToId">
                        <option>Delhi</option>
                        <option>Hyderabad</option>
                        <option>Pune</option>
                    </select>
                  </div>
                  <div className="form-group" style={{width:'150px', textAlign:'center', display:'block', marginLeft:'auto', marginRight:'auto'}}>
                    <button className="btn btn-primary btn-block" type="submit">
                      Book
                    </button>
                  </div>
                </div>
            </Form>
          </div>
        </div>
        <div className="col-sm-4"></div>
        </div>
      )
}

export default ServiceForm
