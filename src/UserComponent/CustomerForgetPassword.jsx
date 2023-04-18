import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CustomerForgetPassword = () => {
  let navigate = useNavigate();

  const [forgetRequest, setForgetRequest] = useState({
    mobileNo: "",
    newPassword: "",
  });

  const handleUserInput = (e) => {
    setForgetRequest({ ...forgetRequest, [e.target.name]: e.target.value });
  };

  const changePassword = (e) => {
    fetch("http://localhost:8080/api/customer/forgetPassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forgetRequest),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);

        toast.success("Password changed successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/customer/login");
      });
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
            <h4 className="card-title">Forget Password</h4>
          </div>
          <div className="card-body text-color-1">
            <form>
              <div className="mb-3 text-color">
                <label for="username" class="form-label">
                  <b>Mobile No</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNo"
                  name="mobileNo"
                  onChange={handleUserInput}
                  value={forgetRequest.mobileNo}
                />
              </div>
              <div className="mb-3 text-color">
                <label for="password" className="form-label">
                  <b>New Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  onChange={handleUserInput}
                  value={forgetRequest.newPassword}
                  autoComplete="on"
                />
              </div>
              <button
                type="submit"
                className="btn bg-color custom-bg-1 text-color"
                onClick={changePassword}
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

export default CustomerForgetPassword;
