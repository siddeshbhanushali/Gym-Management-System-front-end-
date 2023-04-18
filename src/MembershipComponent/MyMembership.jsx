import { useState, useEffect } from "react";
import axios from "axios";

const MyMembership = () => {
  var customer = JSON.parse(sessionStorage.getItem("active-customer"));

  const [allCustomerMembership, setAllCustomerMembership] = useState([]);

  const retrieveAllCustomerMembershipByClientId = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/membership/customer/clientId?clientId=" +
        customer.clientId
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllCustomerMembershipByClientId = async () => {
      console.log("entered here");

      console.log("client id not null hitting this api");
      const allMembership = await retrieveAllCustomerMembershipByClientId();
      if (allMembership) {
        setAllCustomerMembership(allMembership);
      }
    };
    getAllCustomerMembershipByClientId();
  }, []);

  return (
    <div>
      <div
        className="card form-card border-color mt-4 ms-5 me-5 mb-2 custom-bg"
        style={{
          height: "40rem",
        }}
      >
        <div className="card-header text-center text-color-1">
          <h4>Membership Details</h4>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover text-center">
              <thead className="custom-bg-1 text-color-2 table-bordered border-color">
                <tr>
                  <th scope="col">Package Name</th>
                  <th scope="col">Fee</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">Expire Date</th>
                  <th scope="col">Payment Status</th>
                </tr>
              </thead>
              <tbody className="text-color-1">
                {allCustomerMembership.map((membership) => {
                  return (
                    <tr>
                      <td>
                        <b>{membership.packageName}</b>
                      </td>
                      <td>
                        <b>{membership.price}</b>
                      </td>
                      <td>
                        <b>{membership.startDate}</b>
                      </td>
                      <td>
                        <b>{membership.endDate}</b>
                      </td>
                      <td>
                        <b>{membership.paymentStatus}</b>
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

export default MyMembership;
