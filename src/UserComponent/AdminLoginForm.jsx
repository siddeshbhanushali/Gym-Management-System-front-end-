import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    username: "",
    password: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    e.preventDefault();
    if (
      loginRequest.username === "" ||
      loginRequest.username.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("emaili").innerText="*Enter valid Email ID";
      document.getElementById("emaili").style.color = "red"
    } 
    else if (
      loginRequest.password=== "" 
      
    ) {
      
      document.getElementById("passwordi").innerText="*Min 8 character and include 1 capital, 1 number and 1 special character";
      document.getElementById("passwordi").style.color = "red"
    }

    else{
      alert(loginRequest.password)
    fetch("http://localhost:8080/api/admin/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);
        sessionStorage.setItem("active-user", "Admin");
        toast.success("logged in successfully!!!", {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/home");
        window.location.reload(true);
      });
    });
  }
  };

  return (
    <div>
      <div className="mt-4 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header text-center text-color-1">
            <h4 className="card-title">Admin Login</h4>
          </div>
          <div className="card-body text-color-1">
            <form>
              <div className="mb-3 text-color">
                <label for="username" class="form-label">
                  <b>Username</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={handleUserInput}
                  value={loginRequest.username}
                  required
                />
              </div>
              <div class="mb-3 text-color"id="emaili"></div>
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
                  required
                />
              </div>
              <div class="mb-3 text-color"id="passwordi"></div>
              <button
                type="submit"
                className="btn bg-color custom-bg-1 text-color"
                onClick={loginAction}
              >
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
