import { useEffect, useState } from "react";
import axios from "axios";


function App(){
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const getData = async () => {
      try{
        const url = "https://fakestoreapi.com/products";
        const res = await axios.get(url);
        setProduct(res.data); /// data is the property of the response object returned by axios
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    getData();
  },[])

  if(loading){
    return <h2>Loading Products...</h2>
  }

  return (<>
    <h1>Products</h1>
    {
      product.map((val)=>(
        <div key={val.id}>
          <h2>{val.title}</h2>
          <h2>Price: {val.price}</h2>
        </div>
      ))
    }
  </>)
}
export default App;