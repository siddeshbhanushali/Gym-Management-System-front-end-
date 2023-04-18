import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CustomerChangePassword = () => {
  var customer = JSON.parse(sessionStorage.getItem("active-customer"));
  let navigate = useNavigate();
  const [changeRequest, setChangeRequest] = useState({
    customerId: "",
    oldPassword: "",
    newPassword: "",
  });

  changeRequest.customerId = customer.id;

  const handleUserInput = (e) => {
    setChangeRequest({ ...changeRequest, [e.target.name]: e.target.value });
  };

  const changePassword = (e) => {
    fetch("http://localhost:8080/api/customer/changePassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeRequest),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);
        sessionStorage.clear();
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
        window.location.reload(true);
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
            <h4 className="card-title">Change Password</h4>
          </div>
          <div className="card-body text-color-1">
            <form>
              <div className="mb-3 text-color">
                <label for="oldPassword" class="form-label">
                  <b>Old Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="oldPassword"
                  name="oldPassword"
                  onChange={handleUserInput}
                  value={changePassword.oldPassword}
                />
              </div>
              <div className="mb-3 text-color">
                <label for="newPassword" className="form-label">
                  <b>New Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  onChange={handleUserInput}
                  value={changePassword.newPassword}
                  autoComplete="on"
                />
              </div>
              <button
                type="submit"
                className="btn bg-color custom-bg-1 text-color"
                onClick={changePassword}
              >
                Change Password
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChangePassword;
