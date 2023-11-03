import React ,{useEffect, useState} from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { slideData } from '../data';

const Container=styled.div`
    width:100vw;
    overflow:hidden;
`
const Wrapper=styled.div`
    width:400%;
    height: 100%;
    display: flex;
    margin-left:${(props)=>props.slide*-100}%;
    transition: transform .5s ease-in-out ;
`
const Slide=styled.div`
    width:25%;
    height: 50vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background-color:${(props)=>props.bg};
    z-index:1;
    // padding:3rem;
`
const Arrow=styled.div`
    width:100vw;
    display:flex;
    justify-content:space-between;
    position:fixed;
    top:25%;
    padding:2rem;
    z-index:2;
`
const ImageBox=styled.div`
width:350px;
height:100%;
`
const Image=styled.img`
object-fit:cover;
height:100%
`
const Info = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
    margin-left:1rem;
    
`
const Content=styled.div`
    margin:12px auto;
`
const Button=styled.div`
background-color:white;
color:black;
padding:1rem;
width:8rem;
margin-top:1rem;
`

const Slider = () => {

    let [slidenumber,setSlideNumber]=useState(0);
    let [isAutoSliding,setAutoSliding]=useState(true);

    const handleClick=(direction)=>{
        if(direction ==="left"){
            setSlideNumber(slidenumber>0 ? slidenumber-1:2)
        }
        else{
            setSlideNumber(slidenumber<3 ? slidenumber+1:0)
        }
    }
  useEffect(()=>{
    if(isAutoSliding){
        const interval =setInterval(()=>{
            setSlideNumber((prev)=>(prev===2?0:prev+1))
        },2000)

        return ()=>{
            clearInterval(interval)
        }
    }
  },[])
    
  return (
    <Container>
        <Arrow>
            <ArrowLeftIcon onClick={()=>handleClick("left")}/>    
            <ArrowRightIcon onClick={()=>handleClick("right")}/>
        </Arrow>
        <Wrapper slide={slidenumber}>
            {slideData.map((slidedata)=>{
                return(
                    <Slide bg={slidedata.bg}>
                        <Info>
                            <h1>{slidedata.title}</h1>
                            <Content>
                                <p>{slidedata.description}</p>
                            </Content>
                            <Button>Shop now</Button>
                        </Info>
                        <ImageBox>
                            <Image src={slidedata.imageLink}/>
                        </ImageBox>
                    </Slide>
                )
            })}
              
        </Wrapper>
    </Container>
  )
}

export default Slider