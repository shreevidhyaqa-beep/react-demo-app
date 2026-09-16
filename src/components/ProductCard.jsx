import {memo} from "react"
const API_Server_URL=import.meta.env.VITE_API_URL.replace("/api","")
function ProductCard({product,isAdmin =false,onEdit}) {
    return(
        
            <div className="card h-100 shadow-sm">
            {/* <img src={`https://localhost:7120/${product.imagePath}`} class="card-img-top" alt={product.name}/> */}
                <img src={`${API_Server_URL}/${product.imagePath}`} class="card-img-top" alt={product.name}/>
                <div className="card-body">
                    <h5 className="card-title">
                       {product.name}
                    </h5>
                    <p className="card-text">
                        <strong>Price::</strong>
                        {product.price}
                    </p>
                    <p className="card-text">
                        <strong>Category::</strong>
                        {product.category}
                    </p>
                    <div className=" d-flex gap-2">
                        <button className="btn btn-primary">ViewDetails</button>
                        {isAdmin &&(<button className="btn btn-warning" onClick={()=>onEdit(product.id)}>Edit</button>)}

                    </div>
                   

                </div>
            </div>
     
    )
    
}
//export default ProductCard
export default memo(ProductCard)