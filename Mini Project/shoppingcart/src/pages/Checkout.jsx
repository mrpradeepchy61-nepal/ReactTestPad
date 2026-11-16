import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { useState } from "react";

function Checkout() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const [placed, setPlaced] = useState(false);

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    function placeOrder(e) {
        e.preventDefault();

        dispatch(clearCart());
        setPlaced(true);
    }

    if (placed) {
        return <h1 className="success">Order Placed Successfully!</h1>;
    }

    if (items.length === 0) {
        return <h2>Your cart is empty!</h2>;
    }

    return (
        <div className="container">
            <h1>Checkout</h1>

            <h2>Order Summary</h2>

            {items.map(item => (
                <p key={item.id}>
                    {item.name} x {item.quantity} = ₹
                    {item.price * item.quantity}
                </p>
            ))}

            <h2>Total: ₹{total}</h2>

            <h2>Customer Details</h2>

            <form onSubmit={placeOrder}>
                <input placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input placeholder="Address" required />
                <input type="tel" placeholder="Phone Number" required />

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;