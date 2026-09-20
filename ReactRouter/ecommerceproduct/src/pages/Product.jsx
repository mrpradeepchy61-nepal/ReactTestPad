import {Link, Outlet} from "react-router-dom"

function Product(){
    return (<>
    <h1>Products Page</h1>
        <nav>
            <Link to="/product/electronics">Electronics</Link> {"    |    "}
            <Link to="/product/clothing">Clothing</Link>  {"    |    "}
            <Link to="/product/furniture">Furniture</Link>
        </nav>
        <hr />
        <Outlet/>
    </>)
}
export default Product