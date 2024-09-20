import './style.css';
import useFetch from '../utils/useFetch';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

function Productlist() {
    const [product, setProduct] = useState([]); {/*used to hold values and be updated over time*/}
    const [searchtext, setSearchitem] = useState('');
    const { data, err, loading } = useFetch('https://dummyjson.com/products');

    useEffect(() => {  {/*used to fetch data and this renders after component renders */}
        if (data) {
            // console.log("Fetch data: ", data);
            setProduct(data.products);
        }
    }, [data]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (err) {
        return <h1>Error loading: {err}</h1>;
    }

    // filter products based on search text

    const filteredProducts = product.filter((item)=>
    item.title.toLowerCase().includes(searchtext.toLowerCase()));

    return (
        <>  
           <div className="searchitem">
            <input type='text' placeholder='Search for Product name...'
               value={searchtext} onChange={(e) => setSearchitem(e.target.value)}/>
            <CiSearch className='searchIcon'/>
           </div>
           <div className="productlist">
            {filteredProducts.length>0 ? ( 
                filteredProducts.map((item)=>(
                    <Link to={`/products/${item.id}`} key={item.id} className="no-underline">
                    <div className="productitem">
                        <img src={item.thumbnail} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>${item.price}</p> {/*here we get all the products details by using useFetch, and we use mapping function to display all the products*/}
                    </div>
                </Link>
                ))
            ):(
                <h2>No product found with the given search text.</h2>
            )}
        </div>
        </>
    );
}

export default Productlist;
