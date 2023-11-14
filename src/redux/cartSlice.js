import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[
            // {
            //     title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            //     quantity: 3,
            //     total: 60,
            //     category: "electronics",
            //     id:10,
            //     image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            //     price: 109,
            //     rating: {rate: 2.9, count: 470}
            // },
            // {
            //     quantity: 3,
            //     total: 60,
            //     category:"women's clothing",
            //     id:19,
            //     image:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            //     price: 7.95,
            //     rating:{rate: 4.5, count: 146},
            //     title:"Opna Women's Short Sleeve Moisture"
            // }
        ],
        totalQty:0,
        totalPrice:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const existedItem=state.products?.find((item)=>(item.id===action.payload.id))
            if(existedItem){
                state.totalQty-=existedItem.quantity;
                state.products=state.products.map((item)=>{
                    if(item.id===action.payload.id){
                        item.quantity=action.payload.quantity;
                    }
                    return item;
                    })
            }
            else{
                state.products.push(action.payload);
            }
            state.totalQty+=action.payload.quantity;
            state.totalPrice+=(action.payload.quantity*action.payload.price);
        },
        removeFromCart:(state,action)=>{
            state.products=state.products?.filter((item)=>(item.id!=action.payload.id));
            state.totalPrice-=action.payload.quantity*action.payload.price;
            state.totalQty-=action.payload.quantity;
        },
        incrementQty:(state,action)=>{
            const updatedProducts = state.products?.map((item)=>{
                if (item.id === action.payload.id) {
                    return {...item,quantity:item.quantity+1}
                }
                return item;

            })
            state.products=updatedProducts;
            state.totalQty+=1
            state.totalPrice+=action.payload.price
        },
        decrementQty:(state,action)=>{
            var quant;
            const updatedProducts = state.products?.map((item)=>{
                quant =item.quantity-1;
                if (item.id === action.payload.id && item.quantity>1) {
                    return {...item,quantity:item.quantity-1}
                }
                return item;

            })
            state.products=updatedProducts;
            if(quant){
                state.totalQty-=1
                state.totalPrice-=action.payload.price
            }   
            
        }
    }
})

export const {addToCart,removeFromCart,incrementQty,decrementQty} = cartSlice.actions
export default cartSlice.reducer