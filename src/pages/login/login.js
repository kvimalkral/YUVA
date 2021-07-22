import React from 'react'

const Login = () => {
    return(
        <div className="d-flex justify-content-center">
                 <form className="w-50">
        <h1 className="text-center mt-2 mb-2">Login</h1>

                 <div className="m-0 row ">
        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="text"  className="form-control" id="staticEmail" />
        </div>
      </div>
      <br/>
      <div className="m-0 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <br/>
<div className="d-flex justify-content-end">
<button className="btn btn-primary text-right">Login</button>

</div>
                 </form>
        </div>
      
    )
}

export default Login;