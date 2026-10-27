import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <Dashboard />
            <Profile />
        </div>
    );
}

export default App;