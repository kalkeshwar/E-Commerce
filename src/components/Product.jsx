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
border:1px solid black;
`
const ImageBox =styled.div`
width:90%;
height:250px;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:fit;
`
const Info =styled.div`
display:flex;
flex-direction:column;
color:black;
`
const Title= styled.div``

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
            <Title>{category}</Title>
            <Title>{price}</Title>
            <Title>{rating.rate}⭐</Title>
          </Info>
      </Container>  
    </Link>
  )
}

export default Product