import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faFacebook,
    faXTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope,faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
`
const Left = styled.div`
  display:flex;
  width:31%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 3px;
`
const Logo = styled.div``
const Desc = styled.div`
  display:flex;
  flex-wrap:wrap;
  `
const SocialContainer = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  align-items:center;
  justify-content:center;
  column-gap:10px;
`
const Center = styled.div`
  display:flex;
  width:31%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 3px;
`
const Title=styled.h3``
const List = styled.ul`
  display:flex;
  flex-wrap:wrap;
  list-style:none;
`
const ListItem=styled.li`
  width:50%;
  margin-bottom:5px;
`
const Right = styled.div`
  display:flex;
  width:31%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 3px;
`
const ContactItem= styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
`



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Kalki</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>   
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FontAwesomeIcon icon={faEnvelope}/>
          email@gmail.com
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faPhone}/>
          +1234567890
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faLocationDot}/>
          123 Street Name, City Name Here, place
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
