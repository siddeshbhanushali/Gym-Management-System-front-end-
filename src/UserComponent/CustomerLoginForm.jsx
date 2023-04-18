import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomerLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
  alert(loginRequest.emailId)
    fetch("http://localhost:8080/api/customer/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    }).then((result) => {
      console.log("result", result);
      if(result.body===null)
      {
        toast.error("invalid Admin")
      }
      {
      
      result.json().then((res) => {
        console.log(res);
        sessionStorage.setItem("active-user", "Customer");
        sessionStorage.setItem("active-customer", JSON.stringify(res));
        toast.success("logged in successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/home");
        window.location.reload(true);
      });}
    });
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-4 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header text-center text-color-1">
            <h4 className="card-title">Customer Login</h4>
          </div>
          <div className="card-body text-color-1">
            <form>
              <div className="mb-3 text-color">
                <label for="emailId" class="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                  required
                />
              </div>
              <div className="mb-3 text-color">
                <label for="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn custom-bg-1 text-color"
                  onClick={loginAction}
                >
                  Login
                </button>
              </div>

              <div className="d-flex justify-content-center mt-3">
                forget password?{" "}
                <Link to="/customer/forgetpassword" className="active">
                  <b className="text-color-3">click here</b>
                </Link>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoginForm;
