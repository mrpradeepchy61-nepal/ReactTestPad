
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
    {
        id: 1,
        name: "Headphones",
        price: 1500,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2500,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1200,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    },
    {
        id: 4,
        name: "Mouse",
        price: 800,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
    }
];

function Products() {
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Our Products</h1>

            <div className="products">

                {products.map(product => (
                    <div className="card" key={product.id}>

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <h3>{product.name}</h3>

                        <p>₹{product.price}</p>

                        <button
                            onClick={() => dispatch(addToCart(product))}
                        >
                            Add to Cart
                        </button>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Products;
