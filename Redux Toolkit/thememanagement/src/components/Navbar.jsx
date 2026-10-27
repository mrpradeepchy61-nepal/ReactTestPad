import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ThemeSlice";

function Navbar(){
    const theme = useSelector((state)=>state.theme.theme)
    const dispatch = useDispatch();

    return(<>
        <nav>
            <h1>My Theme App</h1>
            
            <button onClick={()=>dispatch(toggleTheme())}>Toggle Theme</button>
            <p>Current Theme: {theme}</p>
        </nav>
    </>)
}
export default Navbar;