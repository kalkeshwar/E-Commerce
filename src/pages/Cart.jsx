import React, { useContext} from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { decrementQty, incrementQty, removeFromCart } from '../redux/cartSlice';

const Container = styled.div`
width:90vw;
min-height:70vh;
`;
const Nouser=styled.div``;
const Nousermessage = styled.h1``
const CartContainer=styled.div`
  width:65vw;
  min-height:90vh;
  display:flex;
  flex-direction:column;
`;
const CartItem=styled.div`
  width:100%;
  height:250px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  padding-left:5px;
  margin:2px;
  // background-color:#a1a1a1db;
  border:1px solid lightgrey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.09);
`;
const ImageDiv=styled.div`
width:200px;
height:80%;
display:flex;
align-items:center;
justify-content:center;
`;
const Img = styled.img`
width:100%;
height:100%;
object-fit:fit;
`;
const CartDetails=styled.div`
display:flex;
flex-direction:column;
padding:4px 5px;
`
const Title=styled.h2``;
const QuantDiv=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:150px;
height:50px;
// background-color:crimson;
`;
const DecBtn=styled.div`
  width:40px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:rgba(0,0,0,0.9);
  color:white;
  font-size:30px;
  cursor:pointer;
`;
const IncBtn=styled.div`
width:40px;
height:100%;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.9);
color:white;
font-size:30px;
cursor:pointer;

`;
const Box=styled.input`
width:50px;
height:100%;
padding:10px;

`;
const Remove = styled.div`
width:30px;
height:30px;
color:crimson;
cursor:pointer;
`;
const Price=styled.h3``;

const Cart = () => {
  const {products,totalQty:totalQuantity,totalPrice}=useSelector((state)=>state.cart) //object destructing
  const user = /*useSelector((state)=>state.user.currentUser)*/ true;
  const dispatch=useDispatch();

  const handleIncrement=(item)=>{
    console.log(item)
    dispatch(incrementQty(item));
    console.log(item)
  }
  const handleDecrement=(item)=>{
    dispatch(decrementQty(item));
  }

  return (
    <Container>
        {user?(products.length>0)?
            (<CartContainer>
              {products?.map((item)=>
              (<CartItem>
                <ImageDiv>
                  <Img src={item.image}/>
                </ImageDiv>
                <CartDetails>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
                  <QuantDiv>
                    <DecBtn onClick={()=>handleDecrement(item)}>-</DecBtn>
                    <Box type='number' readOnly value={item.quantity}/>
                    <IncBtn onClick={()=>handleIncrement(item)}>+</IncBtn>
                  </QuantDiv>
                  <Remove onClick={()=>dispatch(removeFromCart(item))}><FontAwesomeIcon icon={faTrash}/></Remove>
                </CartDetails>
              </CartItem>))}
              <p>{totalPrice}</p>
            </CartContainer>):<p>Your cart is empty</p>
        :(<Nouser>
            <Nousermessage>Hi, please Login to get your Cart</Nousermessage>
          </Nouser>)}
    </Container>
  );
};

export default Cart;
