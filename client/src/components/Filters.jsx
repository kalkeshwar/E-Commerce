import React,{useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'

const FilterContainer = styled.div`
    width:20%;
    background-color:#f7f7f7;
    height:500px;
    position:sticky;
    margin:5px 10px;
    padding:5px;
    box-shadow:0 2px 4px rgba(0,0,0,.2);
`;
const FilterHeading=styled.div`
display:flex;
justify-content:space-between;
`;
const Title = styled.h2``;
const MiniTitle = styled.h4``;
const AvailabilitySection=styled.div`
margin:10px 0px;
display:flex;
flex-direction:column;
row-gap:5px;
`;
const CheckBoxItem=styled.div`
    display:flex;
    align-items:center;
`;
const Label=styled.label``;
const Input=styled.input``;
const BrandsSection=styled.div`
margin:10px 0px;
display:flex;
flex-direction:column;
row-gap:5px;
`;
const PriceSection=styled.div`
margin:10px 0px;
display:flex;
flex-direction:column;
row-gap:5px;`;
const RangeInputdiv=styled.div`
display:flex;
flex-direction:column;
`;
const RatingSection=styled.div``;
const DiscountSection=styled.div``;
const Btn = styled.button`
    background-color:blue;
    color:white;
    padding:10px;
    border-radius:5px;
    border:none;
    cursor: pointer;
`
const FilterButtons=styled.div`
display:flex;
justify-content:space-between;
`


const Filters = () => {

    const [isFilterOpen,setIsFilterOpen]=useState(true);

    const [filers,setFilters]=useState({
        availability:[],
        brands:[],
        priceMin:0,
        priceMax:10000,
        ratingMin:0,
        ratingMax:5,
        discountMin:0,
        discountMax:100
    })

    const clearFilters = () => {
        setFilters({
          available: [],
          brands: [],
          priceMin: 0,
          priceMax: 1000,
          ratingMin: 0,
          ratingMax: 5,
          discountMin: 0,
          discountMax: 100,
        });
      };

    const [isavailability,setIsAvailability]=useState(false);
    const [brand,setBrand]=useState([]);
    const [minPrice,setMinPrice]=useState(0);
    const [maxPrice,setMaxPrice]=useState(1000);
    
    const handleCheckAvailability=()=>{
        setIsAvailability((prev)=>!prev)
    }
    
  return (
    <FilterContainer>
        <FilterHeading>
            <Title>Filters</Title>
            <FontAwesomeIcon icon={faFilter} style={{marginTop:`5px`,fontSize:`30px`}}/>
        </FilterHeading><hr></hr>
        <AvailabilitySection>
            <MiniTitle>Availability</MiniTitle>
            <CheckBoxItem>
                <Input type='checkbox' id='availability' name='availability' checked={isavailability} onClick={handleCheckAvailability}/>
                <Label for='availability'>Availabilty in Stock</Label>
            </CheckBoxItem>
        </AvailabilitySection><hr/>
        <BrandsSection>
            <MiniTitle>Brands</MiniTitle>
            <CheckBoxItem>
                <Input type='checkbox' id='H&M' name='H&M' value={true}/>
                <Label for='H&M'>H&M</Label>
            </CheckBoxItem>
            <CheckBoxItem>
                <Input type='checkbox' id='Allen Solly' name='Allen Solly' value={true}/>
                <Label for='Allen Solly'>Allen Solly</Label>
            </CheckBoxItem>
            <CheckBoxItem>
                <Input type='checkbox' id='Wrogn' name='Wrogn' value={true} />
                <Label for='Wrogn'>Wrogn</Label>
            </CheckBoxItem>
            <CheckBoxItem>
                <Input type='checkbox' id='Levis' name='Levis' value={true}/>
                <Label for='Levis'>Levis</Label>
            </CheckBoxItem>
        </BrandsSection><hr/>
        <PriceSection>
            <MiniTitle>Price</MiniTitle>
            <RangeInputdiv>
                <Label for='minPrice'>min</Label>
                <Input type='range' id='minPrice' min={0} max={1000} style={{width:`80%`}} value={minPrice} onChange={(e)=>setMinPrice(e.target.value)}></Input>
                <Input type='text' value={minPrice} readOnly style={{border:"none",outline:"none",backgroundColor:`#f7f7f7`}}/>
            </RangeInputdiv>
            <RangeInputdiv>
                <Label for='maxPrice'>max</Label>
                <Input type='range' id='maxPrice' min={0} max={10000} style={{width:`80%`}} value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)}></Input>
                <Input type='text' value={maxPrice} readOnly style={{border:"none",outline:"none", backgroundColor:`#f7f7f7`}}/>
            </RangeInputdiv>
        </PriceSection>
        <RatingSection></RatingSection>
        <DiscountSection></DiscountSection> 
        <FilterButtons>
            <Btn>Apply Filters</Btn>
            <Btn>Reset Filters</Btn>
        </FilterButtons>
    </FilterContainer>
  )
}

export default Filters