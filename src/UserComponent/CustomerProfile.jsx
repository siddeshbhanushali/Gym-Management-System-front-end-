import { Link } from "react-router-dom";

const CustomerProfile = () => {
  var customer = JSON.parse(sessionStorage.getItem("active-customer"));

  return (
    <div className="d-flex justify-content-center">
      <div
        className="card form-card border-color mt-4 ms-5 me-5 mb-2 custom-bg"
        style={{
          height: "35rem",
          width: "30rem",
        }}
      >
        <div className="card-header text-center text-color-1">
          <h4>My Profile</h4>
        </div>
        <div className="card-body  ">
          <div className="d-flex justify-content-center">
            <img
              src={"http://localhost:8080/api/customer/" + customer.pic}
              class="img-fluid"
              alt="customer_pic"
              style={{
                maxWidth: "170px",
                borderRadius: "30px",
              }}
            />
          </div>

          <div className="text-color-1 text-left mt-4 ms-5">
            <h4>
              Name :<span className="text-color-3"> {" " + customer.name}</span>
            </h4>
            <h4>
              Age : <span className="text-color-3">{" " + customer.age}</span>
            </h4>
            <h4>
              Email Id :
              <span className="text-color-3">{" " + customer.emailId}</span>
            </h4>
            <h4>
              Contact :
              <span className="text-color-3">{" " + customer.contact}</span>
            </h4>
            <h4>
              Address
              <span className="text-color-3">{" " + customer.address}</span>
            </h4>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <Link
              to={`/customer/profile/updatedetails`}
              className="btn btn-sm bg-color text-color"
            >
              <b> Update Details</b>
            </Link>

            <Link
              to={`/customer/profile/update`}
              className="btn btn-sm bg-color text-color ms-3"
            >
              <b> Update Profile</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
