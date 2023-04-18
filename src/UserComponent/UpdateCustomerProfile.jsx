import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCustomerProfile = () => {
  var customerDetail = JSON.parse(sessionStorage.getItem("active-customer"));

  let customerFetched = {
    ...customerDetail,
  };

  useEffect(() => {
    setCustomer(customerFetched);
  }, []);

  const navigate = useNavigate();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    dob: "",
    contact: "",
    address: "",
    weight: "",
    age: "",
    sex: "",
    membershipId: "",
    pic: "",
  });

  const saveTrainer = () => {
    const formData = new FormData();
    formData.append("id", customer.id);
    formData.append("pic", selectedPhoto);
    formData.append("name", customer.name);
    formData.append("emailId", customer.emailId);
    formData.append("password", customer.password);
    formData.append("contact", customer.contact);
    formData.append("address", customer.address);
    formData.append("weight", customer.weight);
    formData.append("age", customer.age);
    formData.append("clientId", customer.clientId);

    axios
      .post("http://localhost:8080/api/customer/update/profile", formData)
      .then((resp) => {
        toast.success("profile updated successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log("here registyer failed");
        console.log("Error", error);
        toast.error("Failed to Register Trainer!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <div class="mt-4 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          class="card form-card border-color text-color custom-bg"
          style={{ width: "30rem" }}
        >
          <div className="card-header text-center text-color-1 custom-bg">
            <h5 class="card-title">Update Customer Profile</h5>
          </div>
          <div class="card-body">
            <form class="row g-3 text-color-1" onSubmit={saveTrainer}>
              <div class="col-12">
                <label for="pic" class="form-label">
                  Select Customer Photo
                </label>
                <input
                  input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="pic"
                  onChange={(e) => setSelectedPhoto(e.target.files[0])}
                />
              </div>

              <div class="col-12">
                <input
                  type="submit"
                  className="btn custom-bg-1 text-color"
                  value="Update Customer Profile"
                />
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomerProfile;
