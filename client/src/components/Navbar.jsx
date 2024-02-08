import React from 'react'
import { useNavigate,Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
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
  cursor:pointer;
`;
const Middle = styled.div`
  display:flex;
  position:relative;
  height:40px;
`;
const Search=styled.input`
  padding:5px;
`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-end;
  width: 30%;
  `
const CartIconDiv= styled.div`
  margin:0px 20px;
  cursor:pointer;
`
const Signindiv=styled.div`
  display:flex;
  column-gap:5px;
  font-weight:1px;
  font-size:20px;
  cursor:pointer;
  `

const Navbar = () => {

  const navigate=useNavigate();
  const cartQnty=useSelector((state)=>state.cart.totalQty)
  const user = /*useSelector((state)=>state.user.currentUser)*/ true

  return (
    <NavbarContainer>
      <Link to='/' style={{textDecoration:"none",color:"black"}}><Title>shop</Title></Link>
      <Middle>
        <Search type="text" name="search" id="" placeholder='Enter name' />
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
          {!user&& "Sign In"}
        </Signindiv>
      </Right>
    </NavbarContainer>
  )
}

export default Navbar;