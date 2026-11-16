import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
    const [page, setPage] = useState("home");

    return (
        <>
            <Navbar setPage={setPage} />

            {page === "home" && <Home setPage={setPage} />}
            {page === "products" && <Products />}
            {page === "cart" && <Cart setPage={setPage} />}
            {page === "checkout" && <Checkout />}

            {!["home", "products", "cart", "checkout"].includes(page) &&
                <NotFound setPage={setPage} />
            }
        </>
    );
}

export default App;