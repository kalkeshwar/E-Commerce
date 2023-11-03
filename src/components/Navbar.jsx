import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


const NavbarContainer =styled.div`
  background: lightgrey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex:1;
  width:100vw;
  height:60px;
`
const Title = styled.div`
  font-weight:1px;
  font-size:30px;
`;
const Middle = styled.div`
  display:flex;
  position:relative;
  height:40px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-end;
  width: 30%;
  `
const CartIconDiv= styled.div`
  margin:0px 20px;
`
const Signindiv=styled.div`
display:flex;
column-gap:5px;
font-weight:1px;
  font-size:20px;`

const Navbar = () => {

  const navigate=useNavigate();
  const cartQnty=useSelector((state)=>state.cart.totalQty)

  return (
    <NavbarContainer>
      <Title>shop</Title>
      <Middle>
        <input type="text" name="s" id="" placeholder='Enter name' />
        <SearchIcon style={{position:"absolute" , right:"2px", top:`20%`}}/>
      </Middle>
      <Right>
        <CartIconDiv onClick={()=>(navigate("/cart"))}>
          <IconButton aria-label="cart" >
            <Badge badgeContent={cartQnty} color="secondary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Badge>
          </IconButton>
        </CartIconDiv>
        <Signindiv onClick={()=>navigate("/login")}>
          <FontAwesomeIcon icon={faUser} style={{marginTop:`5px`}}/>
          Sign In
        </Signindiv>
      </Right>
    </NavbarContainer>
  )
}

export default Navbar;