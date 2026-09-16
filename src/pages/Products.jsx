import  products from "../data/products"
import ProductCard from "../components/ProductCard"
import { useEffect, useMemo, useState } from "react"
import { getProducts } from "../services/productService"
function Products(){
    const [products, setProducts] =useState([])
    const [loading,setLoading]= useState(true)
    const [error, setError]=useState("")
    const [search,setSearch] =useState("")
    useEffect(()=>{
        //console.log("loading Products");
        //define one method called as loadproducts---> will call api end point in return
        const loadProducts = async () =>{
            try{
                const data =  await getProducts();
                setProducts(data)
            }
            catch(error){
                console.error(error)
                setError("unable to fetch products")
            }
            finally{
                setLoading(false)
            }
        };loadProducts();},[])
        
    const filteredProducts=useMemo(()=>products.filter((product)=>
    product.name?.toLowerCase().includes(search.toLowerCase())),
    [products,search]
    );
    if(loading){
        return(
            <div className="container text-center">
            <div className="spinner-border"></div>
                <p> Loading Products......</p>

            </div>);
    }
         if(error){
            return(
                <div className="container text-center">
                <div className="alert alert-danger">{error}</div>

                </div>
            );
         }
    return (
        <div className="container mt-4">
            <h2>
                Products
            </h2>
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="search products"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </div>
            <div className="row">
                {filteredProducts.map((product)=>(
                    <div className="col-md-4 mb-4"
                    key={product.id}
                    >
                    {/* <ProductCard name={product.name} price={product.price} category={product.category}
                    /> */}
                    <ProductCard product={product}
                    />

                   </div>  
                ))}

            </div>

            {filteredProducts.length === 0 &&(<div className="alert alert-danger">No Products</div>
            )}



        </div>



    )
}
export default Products