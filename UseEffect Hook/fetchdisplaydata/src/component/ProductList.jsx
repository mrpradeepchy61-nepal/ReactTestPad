import {useState, useEffect} from "react"

function ProductList(){
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct ] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data)
        })
        .catch((error) => {
            console.log("Error fetching products:", error);
        })
    },[])



    return (<>
        <h1>Product List</h1>

        {products.map((product)=>(
            <div key={product.id}>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>

                {/* <button onClick={()=>setSelectedProduct(product)}>View Details</button> */}
                <button 
                    onClick={()=>{
                        console.log(product);
                        setSelectedProduct(product);
                    }}
                    >
                    View Details
                </button>

                {selectedProduct?.id === product.id && (
                    <div>
                        <p>Description: {selectedProduct.description}</p>
                        <p>Rating: {selectedProduct.rating.rate}</p>

                        <button onClick={()=>setSelectedProduct(null)}>Close</button>
                    </div>
                )}

            </div>

            
        ))}


            
    
    </>)
}
export default ProductList