function Popup(props){
    return(
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Customer
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form autoComplete="off">
                    <div className="row m-0">
                      <div className=" col-md-6 mb-3">
                        <label
                          htmlFor="salutation-name"
                          className="col-form-label"
                        >
                          Salutation:
                        </label>
                        <select name="salutation"  className="form-control">
                          <option value="Mr">Mr</option>
                          <option value="Miss">Miss</option>
                        </select>
                      </div>
                      <div className=" col-md-6 mb-3">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Customer Name:
                        </label>
                        <input
                          type="text"
                          value={props.customerName}
                          name="customerName"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="recipient-contact"
                          className="col-form-label"
                        >
                          Phone:
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={props.phone}
                          className="form-control"
                          id="recipient-contact"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="recipient-email"
                          className="col-form-label"
                        >
                          Email:
                        </label>
                        <input
                          type="text"
                          name="email"
                          value={props.email}
                          className="form-control"
                          id="recipient-email"
                        />
                      </div>
                      <div className=" col-md-6 mb-3">
                        <label
                          htmlFor="message-address"
                          className="col-form-label"
                        >
                          Address:
                        </label>
                        <textarea
                          name="address"
                          value={props.address}
                          className="form-control"
                          id="message-address"
                        ></textarea>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="recipient-pincode"
                          className="col-form-label"
                        >
                          Pincode:
                        </label>
                        <input
                          type="number"
                          name="pinCode"
                          value={props.pinCode}
                          className="form-control"
                          id="recipient-pincode"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="recipient-age"
                          className="col-form-label"
                        >
                          Age:
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={props.age}
                          className="form-control"
                          id="recipient-age"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="recipient-vistedon"
                          className="col-form-label"
                        >
                          Visted On:
                        </label>
                        <input
                          type="date"
                          name="vistedOn"
                          value={props.vistedOn}
                          className="form-control"
                          id="recipient-vistedon"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        

    )
}

export default Popup