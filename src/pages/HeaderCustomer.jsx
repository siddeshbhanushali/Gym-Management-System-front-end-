import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HeaderCustomer = () => {
  let navigate = useNavigate();

  const cusotmerLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("active-user");
    navigate("/home");
    window.location.reload(true);
  };

  return (
    <div>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li class="nav-item">
          <Link
            to="/customer/membership"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Membership Details</b>
          </Link>
        </li>

        <li class="nav-item">
          <Link
            to="/customer/profile"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">My Profile</b>
          </Link>
        </li>

        <li class="nav-item">
          <Link
            to="/customer/changepassword"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Change Password</b>
          </Link>
        </li>

        <li class="nav-item">
          <Link
            to=""
            class="nav-link active"
            aria-current="page"
            onClick={cusotmerLogout}
          >
            <b className="text-color-1">Logout</b>
          </Link>
          <ToastContainer />
        </li>
      </ul>
    </div>
  );
};

export default HeaderCustomer;
