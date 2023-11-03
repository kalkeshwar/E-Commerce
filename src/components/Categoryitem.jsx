import React,{useRef, useState} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const CategoryContainer=styled.div`
  display: flex;
  width:100vw;
  overflow-x:auto;
  scroll-behavior: smooth;
  position:relative;
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  //chrome and safari
  &::-webkit-scrollbar {
    display: none;
  }
`
const ArrowLeft = styled.div`
  display:flex;
  position:sticky;
  height:30px;
  top:50%;
  left:25px;
  z-index:999;
  background-color:green;
  &:hover{
    cursor:pointer;
  }
`
const ArrowRight = styled.div`
  display:flex;
  position:sticky;
  height:40px;
  top:50%;
  right:25px;
  z-index:999;
  background-color:grey;
  &:hover{
    cursor:pointer;
  }
`
const CategoryScrollContainer= styled.div`
  display:flex;
  flex-direction: row;

`
const CategoryItems = styled.div`
  width:250px;
  height:300px;
  display: flex;
  position: relative;
  margin: 3px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;`

const Info= styled.div`
  position:absolute;
  top: 0;
  left: 0; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:rgb(214, 220, 220,0.3);`

const Title =styled.h1`
  color: white;
`
const Button = styled.button`
  background-color: white;
  color: black;
  border:none;
  cursor: pointer;
  padding: 5px;
  height: 40px;
`
const Categoryitem = () => {

  const categoryScroll=useRef(null);
  const navigate = useNavigate()

  const [scrollLeft, setScrollLeft]= useState(0)
  const handleScroll = (direction) => {
    const parentDiv = categoryScroll.current;
    const scrollAmount = 100; // Adjust the scroll amount as needed

    if (direction === 'left') {
      setScrollLeft(scrollLeft - scrollAmount);
    } else if (direction === 'right') {
      setScrollLeft(scrollLeft + scrollAmount);
    }

    // Use the parentDiv's scrollLeft to control the childDiv's scroll position
    parentDiv.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  };

  const handleCategory=()=>{
    navigate("/products")
  }

  return (
    <CategoryContainer ref={categoryScroll}>
      <ArrowLeft onClick={()=>handleScroll("left")}>
        <FontAwesomeIcon icon={faAngleLeft} style={{fontSize:`30px`,color:"black"}} />
      </ArrowLeft>
      <CategoryScrollContainer >
      <CategoryItems>
        <Img src='https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80' alt="fashion"></Img>
        <Info>
          <Title>watches</Title>
          <Button onClick={handleCategory}>Shop now</Button>
        </Info>
      </CategoryItems>
      <CategoryItems>
        <Img src='https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoZXMlMjBjYXRlZ29yaWVzfGVufDB8fDB8fHww' alt="fashion"></Img>
        <Info>
          <Title>Clothes</Title>
          <Button onClick={handleCategory}>Shop now</Button>
        </Info>
      </CategoryItems>
      <CategoryItems>
        <Img src='https://images.unsplash.com/photo-1691096675075-de995918f3ce?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="SkinCare"></Img>
        <Info>
          <Title>Skincare</Title>
          <Button onClick={handleCategory}>Shop now</Button>
        </Info>
      </CategoryItems>
      <CategoryItems>
        <Img src='https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Electronics"></Img>
        <Info>
          <Title>Electronics</Title>
          <Button onClick={handleCategory}>Shop now</Button>
        </Info>
      </CategoryItems>
      <CategoryItems>
        <Img src='https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=600' alt="jewellery"></Img>
        <Info>
          <Title>Jewellery</Title>
          <Button onClick={handleCategory}>Shop now</Button>
        </Info>
      </CategoryItems>
      <CategoryItems>
        <Img src='https://images.pexels.com/photos/3167310/pexels-photo-3167310.jpeg?auto=compress&cs=tinysrgb&w=600' alt="groceries"></Img>
        <Info>
          <Title>Groceries</Title>
          <Button onClick={handleCategory}>Shop now</Button>
        </Info>
      </CategoryItems>
      <CategoryItems>
        <Img src='https://images.pexels.com/photos/704241/pexels-photo-704241.jpeg?auto=compress&cs=tinysrgb&w=600' alt="sunglasses"></Img>
        <Info>
          <Title>sunglasses</Title>
          <Button onClick={handleCategory}>Shop now</Button>
        </Info>
      </CategoryItems>
      </CategoryScrollContainer>
      <ArrowRight  onClick={()=>handleScroll("right")}>
        <FontAwesomeIcon icon={faAngleRight} style={{fontSize:`30px`,color:"white"}} />
      </ArrowRight>
    </CategoryContainer>
    
    )
}

export default Categoryitem;