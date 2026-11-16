function NotFound({ setPage }) {
    return (
        <div className="hero">
            <h1>404 - Page Not Found</h1>
            <button onClick={() => setPage("home")}>
                Go Home
            </button>
        </div>
    );
}

export default NotFound;