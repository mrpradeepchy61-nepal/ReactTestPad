import { useSelector } from "react-redux";

function Navbar({ setPage }) {
    const items = useSelector(state => state.cart.items);

    const totalItems = items.reduce(
        (total, item) => total + item.quantity, 0
    );

    return (
        <nav>
            <h2>ShopEasy</h2>

            <div>
                <button onClick={() => setPage("home")}>Home</button>
                <button onClick={() => setPage("products")}>Products</button>
                <button onClick={() => setPage("cart")}>
                    Cart ({totalItems})
                </button>
            </div>
        </nav>
    );
}

export default Navbar;