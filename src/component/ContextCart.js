import { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import img1 from "../images/arrow.png"
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

const ContextCart = () => {
  const navigate = useNavigate();
  const { item, clearCart, totalItem, totalAmount,total } = useContext(CartContext);
 
  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src={img1} alt="arrow" className="arrow-icon" />
            <h3>Gym Supliments</h3>
          </div>

          <div className="cart-icon">
            <img src="../images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section align-middle">
                <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="../images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Gym Suppliments</h3>
        </div>

        <div className="cart-icon">
          <img src="../images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
         <button onClick={()=>
        {
          navigate("/Checkout",{state:{totalAmount:totalAmount}})
          

        
        }}>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
