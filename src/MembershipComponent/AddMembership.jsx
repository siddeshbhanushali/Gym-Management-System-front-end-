import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddMembership = () => {
  const [packageDetails, setPackageDetails] = useState([]);

  const [membershipDetail, setMembershipDetail] = useState({
    clientId: "",
    packageId: "",
    paymentStatus: "",
  });

  const handleUserInput = (e) => {
    setMembershipDetail({
      ...membershipDetail,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getAllPackage = async () => {
      const allPackage = await retrieveAllPackage();
      if (allPackage) {
        setPackageDetails(allPackage);
      }
    };

    getAllPackage();
  }, []);

  const retrieveAllPackage = async () => {
    const response = await axios.get("http://localhost:8080/api/package/all");

    return response.data;
  };

  const saveMembership = () => {
    const formData = new FormData();
    formData.append("clientId", membershipDetail.clientId);
    formData.append("packageId", membershipDetail.packageId);
    formData.append("paymentStatus", membershipDetail.paymentStatus);

    console.log(formData);

    axios
      .post("http://localhost:8080/api/membership/add", formData)
      .then((resp) => {
        console.log("here package added");
        toast.success("Membership added Successfully!!!", {
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
        console.log("here membership add failed");
        console.log("Error", error);
        toast.error("Failed to add membership!", {
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
    <div className="mt-4">
      <div class="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          class="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header text-center custom-bg">
            <h5 class="card-title text-color-1">Add Customer Membership</h5>
          </div>
          <div class="card-body text-color-1">
            <form>
              <div class="mb-3">
                <label for="description" class="form-label">
                  <b>Client Id</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="clientId"
                  name="clientId"
                  rows="3"
                  placeholder="enter client id.."
                  onChange={handleUserInput}
                  value={membershipDetail.clientId}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Select Package</b>
                </label>

                <select
                  name="packageId"
                  onChange={handleUserInput}
                  className="form-control"
                >
                  <option value="">Select Package</option>

                  {packageDetails.map((packageDetail) => {
                    return (
                      <option value={packageDetail.id}>
                        {" "}
                        {packageDetail.name + "  "}{" "}
                        {"(Rs " + packageDetail.fee + ")"}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Payment Status</b>
                </label>

                <select
                  name="paymentStatus"
                  onChange={handleUserInput}
                  className="form-control"
                >
                  <option value="">Select Payment Status</option>
                  <option value="Paid"> Paid </option>
                  <option value="Pending"> Pending</option>
                </select>
              </div>

              <button
                type="submit"
                onClick={saveMembership}
                class="btn text-color custom-bg-1"
              >
                Add Membership
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMembership;
