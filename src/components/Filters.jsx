import React,{useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'

const FilterContainer = styled.div`
    width:20%;
    background-color:;
    height:500px;
    position:sticky;
`;
const FilterHeading=styled.div`
display:flex;
justify-content:space-between;
`;
const Title = styled.h2``;
const AvailabilitySection=styled.div``;
const CheckBoxItem=styled.div`
    display:flex;
    align-items:center;
`;
const Label=styled.label``;
const Input=styled.input``;
const BrandsSection=styled.div``;
const PriceSection=styled.div``;
const RangeInputdiv=styled.div`
display:flex;
flex-direction:column;
`;
const RatingSection=styled.div``;
const DiscountSection=styled.div``;


const Filters = () => {

    const [availability,setAvailability]=useState(false);
    const [brand,setBrand]=useState("");
    const [minPrice,setMinPrice]=useState("100");
    const [maxPrice,setMaxPrice]=useState("1000");
    
  return (
    <FilterContainer>
        <FilterHeading>
            <Title>Filters</Title>
            <FontAwesomeIcon icon={faFilter} style={{marginTop:`5px`,fontSize:`30px`}}/>
        </FilterHeading><hr></hr>
        <AvailabilitySection>
            <CheckBoxItem>
                <Input type='checkbox' id='availability' name='availability' value={true}/>
                <Label for='availability'>Availabilty in Stock</Label>
            </CheckBoxItem>
        </AvailabilitySection><hr/>
        <BrandsSection>
            <CheckBoxItem>
                <Input type='checkbox' id='apple' name='apple' value={true}/>
                <Label for='apple'>apple</Label>
            </CheckBoxItem>
            <CheckBoxItem>
                <Input type='checkbox' id='samsung' name='samsung' value={true}/>
                <Label for='samsung'>Samsung</Label>
            </CheckBoxItem>
            <CheckBoxItem>
                <Input type='checkbox' id='Redmi' name='Redmi' value={true} />
                <Label for='Redmi'>Redmi</Label>
            </CheckBoxItem>
            <CheckBoxItem>
                <Input type='checkbox' id='Realme' name='Realme' value={true}/>
                <Label for='Realme'>Realme</Label>
            </CheckBoxItem>
        </BrandsSection><hr/>
        <PriceSection>
            <RangeInputdiv>
                <Label for='minPrice'>min</Label>
                <Input type='range' id='minPrice' min={0} max={1000} style={{width:`80%`}}></Input>
            </RangeInputdiv>
            <RangeInputdiv>
                <Label for='maxPrice'>max</Label>
                <Input type='range' id='maxPrice' min={0} max={100000} style={{width:`80%`}}></Input>
            </RangeInputdiv>
        </PriceSection>
        <RatingSection></RatingSection>
        <DiscountSection></DiscountSection>
    </FilterContainer>
  )
}

export default Filters