function Home({ setPage }) {
    return (
        <div className="hero">
            <h1>Welcome to ShopEasy</h1>
            <p>Find the best products at amazing prices.</p>

            <button onClick={() => setPage("products")}>
                Shop Now
            </button>
        </div>
    );
}

export default Home;