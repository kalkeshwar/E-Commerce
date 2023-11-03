import React ,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-regular-svg-icons'
import {  faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { addToCart,removeFromCart,incrementQty,decrementQty } from '../../redux/cartSlice'
import { useDispatch  , useSelector}from "react-redux"
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'
import { IconButton } from '@mui/material'

const EnclosedContainer=styled.div``;
const Container=styled.div`
width:100vw;
min-height:100vh;
display:flex;
flex-direction:row;
position:relative;
`
const ImageSection=styled.div`
min-width:40%;
height:80vh;
position:sticky;
top:2%;
`
const Img=styled.img`
width:100%;
height:100%;
object-fit:fit;
`;
const Info = styled.div`
 margin:2px 25px;
 display:flex;
 flex-wrap:wrap;
 flex-direction:column;
 row-gap:10px;
 
`
const About=styled.div`
display:flex;
flex-wrap:wrap;
`
const Title=styled.h1``;
const Price=styled.h2``;
const Rating=styled.div``;
const CartButton = styled.button`
width:250px;
height:50px;
color:white;
background-color:black;
border:1px solid black;

&:hover{
    background-color:rgba(0,0,0,0.79999);
     cursor:pointer;
}
`;
const Quantwrapper = styled.div`
display:flex;
width:300px;
height:40px;
align-items:center;
`
const Quantity = styled.input`
height:100%;
width:100px;
padding:0 5px;
`
const DecButton = styled.div`
height:100%;
background-color:lightgreen;
color:black;
width:40px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`
const IncButton = styled.div`
height:100%;
background-color:lightgreen;
color:black;
width:40px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`


const SingleProduct = () => {

    const params=useParams()
    const {id}=params;

    const dispatch=useDispatch()

    const [productdetails,setProductDetails]=useState({})
    const [quant,setQuant]=useState(1);
    const [iserror,setError]=useState(false)
    const [isLoading,setLoading]=useState(true)

    const renderRatings=(rating)=>{
        let NumOfFullStars=Math.floor(rating)
        let hasHalfStar=rating-NumOfFullStars>0

        const stars=[]
        for(let i=0;i<NumOfFullStars;i++){
            stars.push(<FontAwesomeIcon icon={faStar} key={i}/>)
        }
        if(hasHalfStar){
            stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={"half"}/>)
        }

        return stars;
    }

    const handleQuant=(change)=>{
        if(change==="decrement"){
            setQuant((prev)=>(prev>1?prev-1:1))
        }
        else{
            setQuant((prev)=>(prev+1))
        }
    }

    const handleCart =(product)=>{
        const productInfo={...product, quantity:quant}
        dispatch(addToCart(productInfo))
    }

    useEffect(()=>{
        const controller = new AbortController()
        ;(async ()=>{
            try{
                setLoading(true);
                setError(false);
                const res=await fetch(`https://fakestoreapi.com/products/${id}`,{signal:controller.signal})
                if (!res.ok) {
                    throw new Error('Request failed');
                  }
                const itemDetails = await res.json();
                setProductDetails({...itemDetails})
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
    },[params])
    
    return(
        <EnclosedContainer>

            {isLoading && <div>Loading products...</div>}
            {iserror && <div>Failed to fetch products.</div>}
            {!isLoading && !iserror && (
                <Container>
                    <ImageSection>
                        <Img src={productdetails.image}/>
                    </ImageSection>
                    <Info>
                        <Title>{productdetails.title}</Title>
                        <Rating>
                            {renderRatings(3.9)}
                        </Rating>
                        <Price>₴£{productdetails.price}</Price>
                        <Quantwrapper>
                            <DecButton onClick={()=>handleQuant("decrement")}>-</DecButton>
                            <Quantity type='number' readOnly value={quant}/>
                            <IncButton onClick={()=>handleQuant("increment")}>+</IncButton>
                            </Quantwrapper>
                        <CartButton onClick={()=>handleCart(productdetails)}>Add to Cart</CartButton>
                        <About>{productdetails.description}</About>
                    </Info>
            </Container>
            )}
     </EnclosedContainer>
        
    )
}

export default SingleProduct