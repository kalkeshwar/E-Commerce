import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container= styled.div`
width:250px;
height:400px;
display:flex;
flex-direction:column;
margin:5px;
padding:4px;
border:1px solid lightgrey;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.09);
`
const ImageBox =styled.div`
width:90%;
height:250px;
display:flex;
justify-content:center;
align-items:center;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:fit;
`
const Info =styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:center;
row-gap:6px;
color:black;
`
const Title= styled.div`
font-size:15px;
font-weight:bold;
`
const Categoryname=styled.div`
  font-size:15px;
`
const Price=styled.div`
font-size:15px;
`
const Rating=styled.div`
font-size:15px;
`

const Product = ({product}) => {
    const {id,title,price,category,description,image,rating}=product
    // console.log(product)

  return (
    <Link to={`/products/${id}`} style={{textDecoration:"none"}}>
      <Container>
          <ImageBox>
              <Image src={image}/>
          </ImageBox>
          <Info>
            <Title>{title}</Title>
            {/* <Categoryname>{category}</Categoryname> */}
            <Price>{price}</Price>
            <Rating>{rating.rate}⭐</Rating>
          </Info>
      </Container>  
    </Link>
  )
}

export default Product