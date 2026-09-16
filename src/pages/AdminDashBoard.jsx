import products from "../data/products"
import ProductCard from "../components/ProductCard"
import { useCallback, useEffect, useState } from "react"
import { getProducts } from "../services/productService"
import { useAuth } from "../context/AuthContext"
function AdminDashBoard() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const {isAdmin} = useAuth();
    const handleEdit = useCallback((productId)=>{
        console.log("Edit Product",productId);
        
    },[]);
    useEffect(() => {
        //console.log("loading Products");
        //define one method called as loadproducts---> will call api end point in return
        const loadProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data)
            }
            catch (error) {
                console.error(error)
                setError("unable to fetch products")
            }
            finally {
                setLoading(false)
            }
        }; loadProducts();
    }, [])


    if (loading) {
        return (
            <div className="container text-center">
                <div className="spinner-border"></div>
                <p> Loading Products......</p>

            </div>);
    }
    if (error) {
        return (
            <div className="container text-center">
                <div className="alert alert-danger">{error}</div>

            </div>
        );
    }
    return (
        <div>
            <h2>
                 Admin DashBoard
            </h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4"
                        key={product.id}
                    >
                        {/* <ProductCard name={product.name} price={product.price} category={product.category}
                    /> */}
                        <ProductCard 
                        product={product}
                        isAdmin = {isAdmin}
                        onEdit = {handleEdit}
                        
                        />

                    </div>
                ))}

            </div>





        </div>



    )
}
export default  AdminDashBoard