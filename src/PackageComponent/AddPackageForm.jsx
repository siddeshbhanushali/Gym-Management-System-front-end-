import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddPackageForm = () => {
  const handleUserInput = (e) => {
    setPackageDetail({ ...packageDetail, [e.target.name]: e.target.value });
  };

  const [packageDetail, setPackageDetail] = useState({
    name: "",
    description: "",
    fee: "",
  });

  const savePackage = () => {
    const formData = new FormData();
    formData.append("name", packageDetail.name);
    formData.append("description", packageDetail.description);
    formData.append("fee", packageDetail.fee);

    axios
      .post("http://localhost:8080/api/package/add", formData)
      .then((resp) => {
        console.log("here package added");
        toast.success("Package added Successfully!!!", {
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
        console.log("here package add failed");
        console.log("Error", error);
        toast.error("Failed to add package!", {
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
            <h5 class="card-title text-color-1">Add Package</h5>
          </div>
          <div class="card-body text-color-1">
            <form>
              <div className="mb-3">
                <label className="form-label">
                  <b>Select Package</b>
                </label>

                <select
                  name="name"
                  onChange={handleUserInput}
                  className="form-control"
                >
                  <option value="">Select Package</option>
                  <option value="Month"> Month </option>
                  <option value="Quater"> Quater</option>
                  <option value="Semi-Annual"> Semi-Annual </option>
                  <option value="Annual"> Annual </option>
                </select>
              </div>

              <div className="mb-3">
                <label for="fee" class="form-label">
                  <b>Package Fee</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fee"
                  name="fee"
                  placeholder="enter fee.."
                  onChange={handleUserInput}
                  value={packageDetail.fee}
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  <b>Package Description</b>
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="enter description.."
                  onChange={handleUserInput}
                  value={packageDetail.description}
                />
              </div>

              <button
                type="submit"
                onClick={savePackage}
                class="btn text-color custom-bg-1"
              >
                Add Package
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackageForm;
