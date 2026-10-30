import { useState } from "react";


function App(){
  const products = [
    { id: 1, name: "HP Laptop", price: 45000, category: "Electronics" },
    { id: 2, name: "Samsung Mobile", price: 25000, category: "Electronics" },
    { id: 3, name: "Dell Laptop", price: 55000, category: "Electronics" },
    { id: 4, name: "Nike Shoes", price: 3000, category: "Fashion" },
    { id: 5, name: "Headphones", price: 2000, category: "Accessories" }
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product)=>{
    const matchName = product.name.toLowerCase().includes(search.toLocaleLowerCase());
    const matchCategory = category ==="All" || product.category === category;

    return matchName && matchCategory;
  });

  


  return(<>
    <h1>Product List</h1>

    <input type="text"  placeholder="Search Products..." value={search} onChange={(e)=>setSearch(e.target.value)}/>  <br /> <br />

    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option value="All">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Fashion">Fashion</option>
      <option value="Accessories">Accessories</option>
    </select>  <br /> <br />

    {filteredProducts.length > 0 ? (
      filteredProducts.map((product)=>(
      <div>
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        
      </div> 
      )) 
    ) : (
      <h3>No Products</h3>
    )}
  </>)
}
export default App;