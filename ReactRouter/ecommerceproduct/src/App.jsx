import { Routes, Route } from "react-router-dom"

import Product from "./pages/Product"
import Electronics from "./pages/Electronics"
import Clothing from "./pages/Clothing"
import Furniture from "./pages/Furniture"


function App(){
    return (<>
        {/* <Product/> */}

        
        <Routes>
            <Route path="/product" element={<Product/>}>
                <Route path="electronics" element={<Electronics/>} />
                <Route path="clothing" element={<Clothing/>} />
                <Route path="furniture" element={<Furniture/>} />

            </Route>
        </Routes>

    </>)
}
export default App