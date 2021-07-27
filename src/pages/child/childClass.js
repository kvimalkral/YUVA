import { Component } from "react";
import axios from "axios";
// const bootstrap = require('bootstrap');
class Childclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsedata: [],
      responseEditData: {},
      state: "Add Customer",
    };
    this.getUsers();
  }

  getUsers = async () => {
    const result = await axios.get("http://localhost:4000/users");
    // this.state.responsedata = result.data
    this.setState({ responsedata: result.data });
    return result.data;
  };

  async deleteCustomer(id) {
    try {
      let result = window.confirm("Are sure you waant to delete the customer");
      if (result) {
        const result = await axios.delete(`http://localhost:4000/users/${id}`);
        alert("Deleted sucessfully");
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async customerEdit(id) {
    try {
      const result = await axios.get(`http://localhost:4000/users/${id}`);
      this.setState({ responseEditData: result.data, text: "Edit User" });

      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  changeText() {
    this.setState({
      responseEditData: {
        salutation: "",
        customerName: "",
        phone: "",
        email: "",
        pinCode: "",
        address: "",
        age: "",
        vistedOn: "",
      },
      text: "Add Customer",
    });
  }

  async handleCustomerCreation(e) {
    e.preventDefault();
    // var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    //     keyboard: false
    //   })
    
    try {
      if (this.state.text == "Add Customer") {
        let result = await axios.post(
          "http://localhost:4000/users",
          this.state.responseEditData
        );
        
        // myModal.hide(modalToggle);
        return result;
      } else {
        let result = await axios.put(
          `http://localhost:4000/users/${this.state.responseEditData._id}`,
          this.state.responseEditData
        );
        // myModal.hide(modalToggle);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(e) {
    const originalValue = this.state.responseEditData;
    if (
      e.target.name == "phone" ||
      e.target.name == "age" ||
      e.target.name == "pinCode"
    ) {
      originalValue[e.target.name] = Number(e.target.value);
    } else {
      originalValue[e.target.name] = e.target.value;
    }
    this.setState({ responseEditData: originalValue });
  }

  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            onClick={() => this.changeText()}
          >
            Add Customer
          </button>

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
                    {this.state.text}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form
                    autoComplete="off"
                    onSubmit={(e) => this.handleCustomerCreation(e)}
                  >
                    <div className="row m-0">
                      <div className=" col-md-6 mb-3">
                        <label
                          htmlFor="salutation-name"
                          className="col-form-label"
                        >
                          Salutation:
                        </label>
                        <select
                          name="salutation"
                          value={this.state.responseEditData.salutation}
                          onChange={(e) => this.handleChange(e)}
                          className="form-control"
                        >
                          <option>Selecte</option>
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
                          value={this.state.responseEditData.customerName}
                          onChange={(e) => this.handleChange(e)}
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
                          type="number"
                          name="phone"
                          value={this.state.responseEditData.phone}
                          onChange={(e) => this.handleChange(e)}
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
                          value={this.state.responseEditData.email}
                          onChange={(e) => this.handleChange(e)}
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
                          value={this.state.responseEditData.address}
                          onChange={(e) => this.handleChange(e)}
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
                          value={this.state.responseEditData.pinCode}
                          onChange={(e) => this.handleChange(e)}
                          className="form-control"
                          id="recipient-pincode"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="recipient-age"
                          className="col-form-label"
                        >
                          Age
                        </label>
                        <input
                          type="text"
                          name="age"
                          value={this.state.responseEditData.age}
                          onChange={(e) => this.handleChange(e)}
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
                          value={this.state.responseEditData.vistedOn}
                          onChange={(e) => this.handleChange(e)}
                          className="form-control"
                          id="recipient-vistedon"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Pincode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                // console.log(this.state.responsedata)
                this.state.responsedata.map((element, i) => {
                  return (
                    <tr>
                      <th>{i + 1}</th>
                      <th scope="row">{element.customerName}</th>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td>{element.address}</td>
                      <td>{element.pinCode}</td>
                      <td>
                        <button className="btn btn-info m-1">View</button>
                        <button
                          className="btn"
                          className="btn btn-primary m-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@mdo"
                          onClick={() => this.customerEdit(element._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger m-1"
                          onClick={() => this.deleteCustomer(element._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Childclass;
