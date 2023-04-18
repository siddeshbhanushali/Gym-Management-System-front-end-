import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchCustomer = () => {
  const [allCustomer, setAllCustomer] = useState([]);
  const [clientId, setClientId] = useState("");
  const [customerName, setCustomerName] = useState("");

  const [tempClientId, setTempClientId] = useState("");
  const [tempCustomerName, setTempCustomerName] = useState("");

  const retrieveAllCustomer = async () => {
    console.log("hitting retrieveAllCustomer");
    const response = await axios.get(
      "http://localhost:8080/api/admin/allcustomer"
    );
    console.log(response.data);
    return response.data;
  };

  const retrieveAllCustomerByClientId = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/admin/search/customer/clientId?clientId=" +
        clientId
    );
    console.log(response.data);
    return response.data;
  };

  const retrieveAllCustomerByCustomerName = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/admin/search/customer/name?customerName=" +
        customerName
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllCustomer = async () => {
      console.log("entered here");
      if (clientId.length > 0) {
        console.log("client id not null hitting this api");
        const allCustomer = await retrieveAllCustomerByClientId();
        if (allCustomer) {
          setAllCustomer(allCustomer);
        }
      } else if (customerName.length > 0) {
        console.log("customer name not null hitting this api");
        const allCustomer = await retrieveAllCustomerByCustomerName();
        if (allCustomer) {
          setAllCustomer(allCustomer);
        }
      } else {
        console.log("both null hitting this api");
        const allCustomer = await retrieveAllCustomer();
        if (allCustomer) {
          setAllCustomer(allCustomer);
        }
      }
    };
    getAllCustomer();
  }, [clientId, customerName]);

  console.log("hitting getAllCustomer");

  const searchCustomerByClientId = (e) => {
    setClientId(tempClientId);
    e.preventDefault();
  };
  const searchCustomerByName = (e) => {
    setCustomerName(tempCustomerName);
    e.preventDefault();
  };

  const fetchAllCustomer = (e) => {
    setClientId("");
    setCustomerName("");
    e.preventDefault();
  };

  return (
    <div>
      <div
        className="card form-card border-color mt-4 ms-2 me-2 mb-2 custom-bg"
        style={{
          height: "42rem",
        }}
      >
        <div className="card-header text-center text-color-1">
          <h4>Searh Customer</h4>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="row">
            <div className="col">
              <form class="row g-3">
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    id="clientId"
                    placeholder="Enter Client Id..."
                    onChange={(e) => setTempClientId(e.target.value)}
                    value={tempClientId}
                    required
                  />
                </div>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn custom-bg-1 text-color mb-3"
                    onClick={searchCustomerByClientId}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="col">
              <form class="row g-3">
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    id="tempCustomerName"
                    placeholder="Enter Customer name..."
                    onChange={(e) => setTempCustomerName(e.target.value)}
                    value={tempCustomerName}
                    required
                  />
                </div>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn custom-bg-1 text-color mb-3"
                    onClick={searchCustomerByName}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover text-center">
              <thead className="custom-bg-1 text-color-2 table-bordered border-color">
                <tr>
                  <th scope="col">Photo</th>
                  <th scope="col">Client Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Age</th>
                  <th scope="col">Sex</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Address</th>
                  <th scope="col">Membership</th>
                </tr>
              </thead>
              <tbody className="text-color-1">
                {allCustomer.map((customerData) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={
                            "http://localhost:8080/api/customer/" +
                            customerData.pic
                          }
                          class="img-fluid"
                          alt="customer_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{customerData.clientId}</b>
                      </td>
                      <td>
                        <b>{customerData.name}</b>
                      </td>
                      <td>
                        <b>{customerData.emailId}</b>
                      </td>
                      <td>
                        <b>{customerData.contact}</b>
                      </td>
                      <td>
                        <b>{customerData.age}</b>
                      </td>
                      <td>
                        <b>{customerData.sex}</b>
                      </td>
                      <td>
                        <b>{customerData.weight}</b>
                      </td>
                      <td>
                        <b>{customerData.address}</b>
                      </td>
                      <td>
                        <Link
                          to={`/admin/customer/membership/${customerData.clientId}`}
                          class="btn custom-bg-1 text-color btn-sm"
                        >
                          <b>Check Membership</b>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCustomer;
