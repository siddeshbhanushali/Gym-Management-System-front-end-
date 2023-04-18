import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMessage = () => {
      if (cart.total_unique_items > 0) {
        return;
      }
  
      return (
        <p className="cart__none">
          You have no items in your shopping cart, start adding some!
        </p>
      );
  }

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
        <CartItem
          item={lineItem}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
          key={lineItem.id}
          className="cart__inner"
        />
    ))
)

  const renderTotal = () => (
      <div className="cart__total">
          <p className="cart__total-title">Subtotal:</p>
          <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
      </div>
  )


  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      { renderEmptyMessage() }
      { renderItems() }
      { renderTotal() }
      <div className="cart__footer">
        <button className="cart__btn-empty" onClick={handleEmptyCart}>Empty cart</button>
        <button className="cart__btn-checkout">Checkout</button> 
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onRemoveFromCart: () => {},
  onUpdateCartQty: () => {},
  onEmptyCart: () => {},
};