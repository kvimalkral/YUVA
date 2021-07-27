import React from "react";

function loginhandler(e) {
    // alert();
    e.preventDefault();
   
    let email = document.forms['loginForm']['email'].value;
    let pass = document.forms['loginForm']['pass'].value;
    if(email === '' && pass === ''){
        e.preventDefault();
                 alert("email and password mandatory");
    }
}
const Login = () => {
  return (
    <div className="d-flex justify-content-center">
      <form name="loginForm" method="post" className="w-50 needs-validation">
        <h1 className="text-center mt-2 mb-2">Login</h1>

        <div className="m-0 row ">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="text" required name="email" className="form-control" id="staticEmail" />
          </div>
        </div>
        <br />
        <div className="m-0 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="pass"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary text-right kk"
            type="submit"
            onSubmit={loginhandler}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
