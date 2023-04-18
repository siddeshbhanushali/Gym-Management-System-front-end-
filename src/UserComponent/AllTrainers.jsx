import { useState, useEffect } from "react";
import axios from "axios";

const AllTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const getAllTrainers = async () => {
      const allTrainers = await retrieveAllTrainers();
      if (allTrainers) {
        setTrainers(allTrainers);
      }
    };
    getAllTrainers();
  }, []);

  const retrieveAllTrainers = async () => {
    const response = await axios.get("http://localhost:8080/api/trainer/all");

    return response.data;
  };

  return (
    <div className="mt-3">
      <div className="text-center text-color-1">
        <h4>All Trainers</h4>
      </div>

      {trainers.map((trainer) => {
        return (
          <div className="container mt-3">
            <div className="row">
              <div className="col-2">
                <div
                  class="card custom-bg border-color"
                  style={{
                    width: "150px",
                    height: "130px",
                    padding: "2px",
                    marginLeft: "100%",
                  }}
                >
                  <img
                    src={"http://localhost:8080/api/trainer/" + trainer.pic}
                    style={{
                      maxHeight: "100px",
                      maxWidth: "100%",
                      width: "auto",
                    }}
                    class="card-img-top rounded mx-auto d-block m-2"
                    alt="img"
                  />
                </div>
              </div>

              <div className="col-8">
                <div
                  class="card border-color"
                  style={{ marginLeft: "17%", height: "130px" }}
                >
                  <div className="card-body custom-bg text-color-1">
                    <div>
                      <h5>
                        <span className="text-color-3">Name:</span>{" "}
                        {trainer.name}
                      </h5>
                      <h5>
                        <span className="text-color-3">Age:</span> {trainer.age}
                      </h5>
                      <h5>
                        <span className="text-color-3">Experience:</span>{" "}
                        {trainer.experience}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTrainers;
