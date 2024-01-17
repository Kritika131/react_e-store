const filterReducer =(state,action)=>{
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":{

            let priceArr=action.payload.map((curElm)=>curElm.price);

            // 1st way to get max price from an array 
            // console.log(Math.max.apply(null,priceArr));
            
            // 2nd way 
            // let maxprice=priceArr.reduce((initialVal,curElm)=>Math.max(initialVal,curElm),0);
            // console.log(maxprice);

            // 3rd way 
            let maxprice= Math.max(...priceArr)
            // console.log(...priceArr); max take it as agrument 
            return {
                ...state,
                filter_products:[...action.payload],
                all_products:[... action.payload],
                filters:{...state.filters, maxPrice:maxprice, price:maxprice}
            }
        }
        case "SET_GRID_VIEW":{
            return {
                ...state,
                grid_view:true,
            }
        }
        case "SET_LIST_VIEW":{
            return {
                ...state,
                grid_view:false,
            }
        }
        case "GET_SORT_VAlUE":{
            // let userSortValue=document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
                       
            return {
                ...state,
                sorting_value:action.payload,
            }
        }
        case "SORTING_PRODUCTS":{
            let newSortData;
            const {filter_products,sorting_value}=state;
            let tempPayloadData = [...filter_products]
            
            const sortingProducts =(a,b)=>{
                // if(sorting_value==="lowest"){
                //     return a.price-b.price;
                // }
                // if(sorting_value==="highest"){
                //     return b.price-a.price;
                // }
                // if(sorting_value==="a-z"){
                //     return  a.name.localeCompare(b.name);
                // }
                // if(sorting_value==="z-a"){
                //     return  b.name.localeCompare(a.name);
                // }
                switch(sorting_value){
                    case "lowest":{return a.price-b.price;}
                    case "highest":{return b.price-a.price;}
                    case "a-z":{return a.name.localeCompare(b.name);}
                    case "z-a":{ return  b.name.localeCompare(a.name);}
                    default :{ return a===b}
                }
            }
            // if(state.sorting_value==="a-z"){
            //     newSortData= tempPayloadData.sort((a,b)=>{
            //        return  a.name.localeCompare(b.name);
            //     })
            // }
            // if(state.sorting_value==="lowest"){
            //     const sortingProduct=(a,b)=>{
            //         return a.price-b.price;
            //     }
                // newSortData= tempPayloadData.sort(sortingProduct)
            // }
            // if(state.sorting_value==="highest"){
            //     const sortingProduct=(a,b)=>{
            //         return b.price-a.price;
            //     }
                // newSortData= tempPayloadData.sort(sortingProduct)
            // }
            // if(state.sorting_value==="z-a"){
            //     newSortData= tempPayloadData.sort((a,b)=>{
            //        return  b.name.localeCompare(a.name);
            //     })
            // }

            newSortData= tempPayloadData.sort(sortingProducts)
            return {
                ...state,
                filter_products:newSortData,
            }
        }
        case "UPDATE_FILTER_VALUE":{
            const {name, value} =action.payload;

            return{
                ...state,
                filters:{
                    ...state.filters,
                     [name]:value,
                }
            }
        }

        case "FILTER_PRODUCT":{
            let {all_products}=state;
            let tempFilterProduct = [...all_products];

            const {text,category,company,color,price} =state.filters;

            if(text){
                tempFilterProduct=tempFilterProduct.filter((curElm)=>{
                    // return curElm.name.toLowerCase().startsWith(text);
                    return curElm.name.toLowerCase().includes(text);
                })
            }
            if(category!='all'){
                tempFilterProduct=tempFilterProduct.filter((curElm)=>{
                    return curElm.category==category;
                })
            }
            if(company!="all"){
                tempFilterProduct=tempFilterProduct.filter((curElm)=>curElm.company.toLowerCase()==company.toLowerCase()
                );
            }
            if(color!="all"){
               tempFilterProduct=tempFilterProduct.filter((curElm)=>curElm.colors.includes(color)
               );
            }
            if(price===0){
               tempFilterProduct=tempFilterProduct.filter((curElm)=>curElm.price==price);
            }
            else{
               tempFilterProduct=tempFilterProduct.filter((curElm)=>curElm.price<=price);
            }

            return{
                ...state,
                filter_products:tempFilterProduct,
            }
        }
        
        case "CLEAR_FILTERS":{
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text:"",
                    category:"all",
                    company:"all",
                    color:"all",
                    maxPrice:state.filters.maxPrice,
                    minPrice:0,
                    price:state.filters.price,


                }
            }
        }
        default : return state;
    }

}

export default filterReducer;