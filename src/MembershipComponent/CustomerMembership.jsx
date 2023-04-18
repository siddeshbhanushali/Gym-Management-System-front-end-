import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomerMembership = () => {
  const { clientId } = useParams();
  const [allCustomerMembership, setAllCustomerMembership] = useState([]);

  const retrieveAllCustomerMembershipByClientId = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/membership/customer/clientId?clientId=" +
        clientId
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
  }, [clientId]);

  return (
    <div className="d-flex aligns-items-center justify-content-center">
      <div
        className="card form-card border-color mt-4 ms-2 me-2 mb-2 custom-bg"
        style={{
          height: "42rem",
          width: "90rem",
        }}
      >
        <div className="card-header text-center text-color-1">
          <h4>Customer Membership</h4>
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
                  <th scope="col">Photo</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Client Id</th>
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
                        <img
                          src={
                            "http://localhost:8080/api/customer/" +
                            membership.customerPic
                          }
                          class="img-fluid"
                          alt="customer_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{membership.customerName}</b>
                      </td>
                      <td>
                        <b>{membership.clientId}</b>
                      </td>
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

export default CustomerMembership;
