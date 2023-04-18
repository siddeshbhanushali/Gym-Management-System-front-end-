import HeaderCustomer from "./HeaderCustomer";
import HeaderAdmin from "./HeaderAdmin";
import HeaderNormal from "./HeaderNormal";

const RoleNav = () => {
  const user = sessionStorage.getItem("active-user");
  console.log(user + "now lets take header decision!!!");

  if (user === "Admin") {
    return <HeaderAdmin />;
  } else if (user === "Customer") {
    return <HeaderCustomer />;
  } else {
    return <HeaderNormal />;
  }
};

export default RoleNav;
