import axios from "axios";
import { useState, useEffect } from "react";
import PackageCard from "./PackageCard";

const AllPackage = () => {
  const [packageDetails, setPackageDetails] = useState([]);

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

  return (
    <div className="container-fluid mb-2 mt-5">
      <div className="mt-2 mb-5">
        <div className="col-md-10" style={{ marginLeft: "10%" }}>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {packageDetails.map((packageDetail) => {
              return <PackageCard detail={packageDetail} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPackage;
