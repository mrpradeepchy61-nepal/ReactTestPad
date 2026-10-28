import axios from"axios"
import { useEffect, useState } from "react";
import "./App.css";


function App(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(()=>{
    const getPost = async () => {
      try{
        const url = "https://fakestoreapi.com/products";
        const res = await axios.get(url);
        setProducts(res.data);
      }catch(error){
        setError("Failed to fetch products");
      }finally{
        setLoading(false);
      }
    }
    getPost();
  },[]);

  const filteredProducts = products.filter((product)=>(
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  ));

  if(loading){
    return <h2>Loading message...</h2>
  }

  if(error){
    return <h2>{error}</h2>
  }


  return(
  <div className="container">
    <h1>Products Store</h1>

    <input 
      type="text" placeholder="search products by title" 
      value={search} onChange={(e)=>setSearch(e.target.value)} 
      className="search"
    />


    <div className="product-grid">
      {
        filteredProducts.length > 0 ? (
          filteredProducts.map((product)=>(
            <div className="product-card">
              <img src={product.image}   />

              <h2 className="product-title">{product.title}</h2>

              <p className="price">Price: {product.price}</p>

              <p className="category">Category: {product.category}</p>
            </div>
          ))) : (
            <p>No Products found.</p>
          )
      }
    </div>
  
  </div>)
}export default App;