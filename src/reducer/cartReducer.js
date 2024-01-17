
const cartReducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_CART":{
             let {id,color,amount,product}=action.payload;

        //tackle the existing product 
        //checking product is already available in cart or not
        
        let existingProduct = state.cart.find((curItem)=>curItem.id===id+color);

        if(existingProduct){
           let updateProduct=state.cart.map((curElm)=>{
            if(curElm.id===id+color){
                let newAmount= curElm.amount+amount;
                if(newAmount >=curElm.max){
                    newAmount=curElm.max;
                }
                return {
                    ...curElm,
                    amount:newAmount,
                }
            }else {
                return curElm;
            }
           });
           return {
            ...state,
            cart:updateProduct,
           }
        }
        else{
        let cartProduct;
        cartProduct={
            id:id+color,
            name:product.name,
            color,
            amount,
            image:product.image[0].url,
            price:product.price,
            max:product.stock,

        }
        return{
            ...state,
            cart:[...state.cart,cartProduct],
        }
      }
        }
        case "SET_DECREMENT":{
             // finding which product decrement btn clicked 
        let updatedData = state.cart.map((curElm)=>{
            if(curElm.id===action.payload){
                // console.log(curElm);
                let decAmount = curElm.amount-1;
                if(decAmount<=1) decAmount=1;

                return {
                    ...curElm,
                    amount:decAmount,
                }
            }else{
                return curElm;
            }
        })
        return {
            ...state,
            cart:updatedData,
        }
        }
        case "SET_INCREMENT":{
             // finding which product decrement btn clicked 
        let updatedData = state.cart.map((curElm)=>{
            if(curElm.id===action.payload){
                // console.log(curElm);
                let incAmount = curElm.amount+1;
                if(incAmount>=curElm.max) incAmount= curElm.max;

                return {
                    ...curElm,
                    amount:incAmount,
                }
            }else{
                return curElm;
            }
        })
        return {
            ...state,
            cart:updatedData,
        }
        }
        case "REMOVE_ITEM":{
            let updatedCart = state.cart.filter((curElm)=>curElm.id!==action.payload)
            return {
                ...state,
                cart:updatedCart,
            }
        }
        case "REMOVE_ITEM":{
            let updatedCart = state.cart.filter((curElm)=>curElm.id!==action.payload)
        return {
            ...state,
            cart:updatedCart,
        }
        }
        case "CLEAR_CART":{
            return{
                ...state,
                cart:[],
            }
        }
        case "CART_PRICE_ITEM_TOTAL":{
            let {total_item,total_price}=state.cart.reduce((initialVal,curElm)=>{
                let{amount,price}=curElm;
                initialVal.total_item+=amount;
                initialVal.total_price+=(amount*price);
                return initialVal;
            },
            {
                total_item:0,
                total_price:0,
            })
            return {
                ...state,
                total_item:total_item,
                total_price:total_price,
            }
        }
        default : return state;
    }
   
   
    // --------------------------------------------------------
    // if(action.type==="CART_TOTAL_ITEM"){
    //     let updateItemVal= state.cart.reduce((initialVal,curElm)=>{
    //         let {amount}=curElm;
    //         initialVal=initialVal+amount;
    //         return initialVal;
    //     },0);
        
    //     return{
    //         ...state,
    //         total_item:updateItemVal,
            
    //     }
    // }
    // if(action.type==="CART_TOTAL_PRICE"){
    //     let updatedPrice=state.cart.reduce((initialVal,curElm)=>{
    //         let {price,amount} = curElm;
    //         initialVal=initialVal+(price*amount);
    //         return initialVal;
    //     },0);
    //     return {
    //         ...state,
    //         total_price:updatedPrice,
    //     }
    // }---------------------------------------------OR

    // if(action.type==="CART_PRICE_ITEM_TOTAL"){
    //     let {total_item,total_price}=state.cart.reduce((initialVal,curElm)=>{
    //         let{amount,price}=curElm;
    //         initialVal.total_item+=amount;
    //         initialVal.total_price+=(amount*price);
    //         return initialVal;
    //     },
    //     {
    //         total_item:0,
    //         total_price:0,
    //     })
    //     return {
    //         ...state,
    //         total_item:total_item,
    //         total_price:total_price,
    //     }
    // }
//   -----------------------------------------------------------------
}

export default cartReducer