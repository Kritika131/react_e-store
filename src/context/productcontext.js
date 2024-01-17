// create a context
// provider 
// consumer=>alternative useContext hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducer/productReducer"

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts : [],
    isSingleLoading:false,
    singleProduct:{},
    isSingleLoading:false,

}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer,initialState);

    const getProducts=async(url)=>{
      dispatch({type:"LOADING"})  
      try{ 
        const res =await axios.get(url);  //axios return promise
        //console.log(res);
        const product= await res.data;
        // console.log(product);
        dispatch({type:"API_DATA", payload:product});
    } catch (error){
        dispatch({type:"API_ERROR"});
    }
    };

    // api call for single priduct 
    const getSingleProduct=async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try{
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
        }catch (error){
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    };


    useEffect(()=>{
      getProducts(API);
    },[]);
   return (
       <AppContext.Provider value={{...state, getSingleProduct}}>
        {children}
       </AppContext.Provider>
   )
}

// custoum hook 
const useProductContext = ()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext};
