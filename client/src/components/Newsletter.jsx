import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
    height:40vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    row-gap:8px;
    background-color:#fcf5f5;
`
const Title = styled.h1`
    font-size:50px;
`
const Desc = styled.div`
    font-size:15px;
    height:25px;
    display:flex;
    flex-wrap:wrap;
`
const Inputcontainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:80%;
`
const Input = styled.input`
    width:60%;
    height:40px;
    padding: 1px 3px;
`
const Button = styled.button`
    background-color:lightblue;
    color:blue;
    width:40px;
    height:40px;
    padding:2px 1px;
`

const Newsletter = () => {

  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <Inputcontainer>
            <Input type='email' placeholder='Your email'/>
            <Button>
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </Inputcontainer>
    </Container>
  )
}

export default Newsletter