import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTrainerForm = () => {
  const navigate = useNavigate();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [trainer, setTrainer] = useState({
    name: "",
    emailId: "",
    password: "",
    contact: "",
    address: "",
    experience: "",
    age: "",
  });

  const handleUserInput = (e) => {
    setTrainer({ ...trainer, [e.target.name]: e.target.value });
  };

  const saveTrainer = () => {
    const formData = new FormData();
    formData.append("pic", selectedPhoto);
    formData.append("name", trainer.name);
    formData.append("emailId", trainer.emailId);
    formData.append("password", trainer.password);
    formData.append("contact", trainer.contact);
    formData.append("address", trainer.address);
    formData.append("experience", trainer.experience);
    formData.append("age", trainer.age);

    axios
      .post("http://localhost:8080/api/trainer/register", formData)
      .then((resp) => {
        console.log("here registyer success");
        toast.success("Registered Successfully!!!", {
          position: "top-center",
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
      <div class="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          class="card form-card border-color text-color custom-bg"
          style={{ width: "30rem" }}
        >
          <div className="card-header text-center text-color-1 custom-bg">
            <h5 class="card-title">Register Trainer</h5>
          </div>
          <div class="card-body">
            <form class="row g-3 text-color-1" onSubmit={saveTrainer}>
              <div class="col-md-6">
                <label for="name" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  onChange={handleUserInput}
                  value={trainer.name}
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="emailId" class="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={trainer.emailId}
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="contact" class="form-label">
                  Contact No
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={trainer.contact}
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={trainer.password}
                  required
                />
              </div>

              <div class="col-12">
                <label for="address" class="form-label">
                  Address
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="address"
                  name="address"
                  onChange={handleUserInput}
                  value={trainer.address}
                  required
                />
              </div>
              <div class="col-6">
                <label for="age" class="form-label">
                  Age
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={trainer.age}
                  required
                />
              </div>
              <div class="col-6">
                <label for="experience" class="form-label">
                  Experience
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="experience"
                  name="experience"
                  onChange={handleUserInput}
                  value={trainer.experience}
                  required
                />
              </div>

              <div class="col-12">
                <label for="pic" class="form-label">
                  Select Trainer Photo
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
                  value="Register Trainer"
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

export default AddTrainerForm;
