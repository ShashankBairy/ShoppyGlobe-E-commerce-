import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../utils/cartSlice';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Cartitem() {
  const dispatch = useDispatch();  {/*allows to dispatch actions*/}
  const location = useLocation();  {/*provides access to the current location object which contains information about the URL*/}
  const product = location.state?.product; {/*in the Productitem.jsx, we have give state, hence we can extract information of that product with the help of state*/}
  const cartItems = useSelector(state => state.cart.items);
  const existingProduct = cartItems.find(i => i.id === product?.id);
  const [quantity, setQuantity] = useState(existingProduct ? existingProduct.quantity : 0);

  useEffect(() => {
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
    }
  }, [existingProduct]);

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (existingProduct) {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    } else {
      dispatch(addItem({ ...product, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (newQuantity === 0) {
        dispatch(removeItem({ id: product.id }));
      } else {
        dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
      }
    }
  };

  const handleSave = () => {
    if (quantity < 1) {
      alert("Quantity should be greater than 0");
      return;
    }
    dispatch(updateQuantity({ id: product.id, quantity }));
  };

  if (!product) {
    return (
      <>
        <h1>No product is selected</h1>
        <Link to="/" className="backbutton">
          <button>Back to HOME</button>
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="homebutton">
        <Link to="/" className="backbutton">
          <button>Back to Home</button>
        </Link>
      </div>
      <div className="cartitem">
        <div className="cartitemdetails">
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <div className="actionbutton">
            <button onClick={handleAdd}>ADD</button> {/*it is a action which we declared in cartSlice.js, with the help of dispatch we can use this action*/}
            <span>{quantity}</span>
            <button onClick={handleRemove}>REMOVE</button> {/*it is a action which we declared in cartSlice.js, with the help of dispatch we can use this action*/}
          </div>
          <div className="actionbutton">
            <Link to='/cart'>
              <button onClick={handleSave}>SAVE</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartitem;
