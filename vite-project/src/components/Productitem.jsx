import { useParams } from 'react-router-dom';
import './style.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../utils/useFetch';

function Productitem() {
    const [product, setProduct] = useState([]);
    const { id } = useParams(); {/*allows us to access the parameters of the current route, here id is a parameter, we have declared this path as /products/:id, params are used when we only declare using colon (:)*/}
    const { data, err, loading } = useFetch(`https://dummyjson.com/products/${id}`); {/*here we have another url, to get the details of a specific product with the help of id*/}
    
    useEffect(()=>{ 
        if(data){
            setProduct(data);
        }
     },[data]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (err) {
        return <h1>Error loading product: {err}</h1>;
    }

    return (
        <div className="productdetail">
            <div className="backbutton">
                <Link to='/'><button>BACK TO HOME</button></Link>
            </div>
            <img src={product.thumbnail} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <div className="cartbutton">
                <Link to='/cartitem' state={{ product }}>
                    <button>ADD TO CART</button> {/*here we got the details of a specific product with the help of params */}
                </Link>
            </div>
        </div>
    );
}

export default Productitem;
