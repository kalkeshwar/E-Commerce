import React ,{useContext, useEffect, useState} from 'react'
import {productsdata} from '../data'
import { Link } from 'react-router-dom'
import  toast  from 'react-hot-toast'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,removeFromCart,incrementQty,decrementQty } from '../redux/cartSlice'
import Filters from '../components/Filters'
import styled from 'styled-components';
import Product from '../components/product'

const Container=styled.div`
    display:flex;
`;
const AllProducts=styled.div`
    display:flex;
    flex-wrap:wrap;
    width:75%;
    cursor:pointer;
`;
const SingleItem = styled.div``


const Products = () => {
    // const {cartitems,setCartItems}=useContext(Context);

    // const handleCart=(id)=>{
    //     //check if already present (toast already in cart)
    //     const item= productsdata.find((prod)=>prod.id===id)
    //     setCartItems([...cartitems,item]);
    //     toast.success("successfully added to cart");
    // }

    // const remFromCart=(idToremove)=>{
    //    const updatedCartItems=cartitems.filter((product,id)=>(product.id!==idToremove))
    //    setCartItems(updatedCartItems)
    // }
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch()

    const [products,setProducts]=useState([])
    const [iserror,setError]=useState(false)
    const [isLoading,setLoading]=useState(true)

    useEffect(()=>{
        const controller = new AbortController()
        ;(async ()=>{
            try{
                setLoading(true);
                setError(false)
                const res=await fetch("https://fakestoreapi.com/products",{signal:controller.signal})
                if (!res.ok) {
                    throw new Error('Request failed');
                  }
                const productsdata = await res.json();
                setProducts([...productsdata])
                setLoading(false)
            }catch(err){
                if(err.name==="AbortError"){
                    console.log("request Aborted")
                    return;
                }
                setError(true)
                setLoading(false)
            }
        })()

        return ()=>{
            controller.abort();
        }
    },[])
    
    return (
    <Container>
        <Filters/>
        {/* name:
            description:
            richDescription:
            image:
            images:
            price:
            discount:
            category:id
            countInStock:
            rating:
            numReviews:
            createdAt: */}

        {isLoading && <div>Loading products...</div>}
        {iserror && <div>Failed to fetch products.</div>}
        {!isLoading && !iserror && (
          <AllProducts>
                {products.map((product)=>(
                    <Product key={product.id} product={product}/>
                ))}
          </AllProducts>
        )}
    </Container>
  )
}

export default Products