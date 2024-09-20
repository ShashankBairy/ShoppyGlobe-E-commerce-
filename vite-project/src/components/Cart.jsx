import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

function Cart() {
  const cartItems = useSelector(state => state.cart.items); {/*allows use to extract data from redux store state*/}

  // console.log("Cart items:", cartItems); 


  if (!cartItems || cartItems.length === 0) {
    return (
      <>
        <h2>Your Cart is Empty</h2>
        <div className="backbutton">
          <Link to="/"><button>Back to Home</button></Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="backbutton">
        <Link to="/"><button>Back to Home</button></Link>
      </div>
      <h1>Your Cart</h1>
      <div className="cart">
        {cartItems.map(item => (
          <div key={item.id} className="cartitems">
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <Link to={`/cartitem`} state={{ product: item }} className='backbutton'>
              <button>Edit</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;

