import { useSelector, useDispatch } from "react-redux";

import {
    increase,
    decrease,
    removeFromCart
} from "../features/cartSlice";

function Cart({ setPage }) {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    if (items.length === 0) {
        return (
            <div className="container">
                <h2>Your cart is empty!</h2>
                <button onClick={() => setPage("products")}>
                    Shop Now
                </button>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Shopping Cart</h1>

            {items.map(item => (
                <div className="cart-item" key={item.id}>
                    <h3>{item.name}</h3>

                    <p>Price: ₹{item.price}</p>

                    <button onClick={() => dispatch(decrease(item.id))}>
                        -
                    </button>

                    <span> {item.quantity} </span>

                    <button onClick={() => dispatch(increase(item.id))}>
                        +
                    </button>

                    <p>
                        Subtotal: ₹{item.price * item.quantity}
                    </p>

                    <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <h2>Total: ₹{total}</h2>

            <button onClick={() => setPage("checkout")}>
                Proceed to Checkout
            </button>
        </div>
    );
}

export default Cart;