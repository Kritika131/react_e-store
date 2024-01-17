import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import {FaCheck} from "react-icons/fa"
import FormatePrice from '../helper/FormatePrice';
import { Button } from './Button';


const FilterSection = () => {
  const{filters:{text,category,color,maxPrice,price,minPrice},updateFilterValue,all_products,clearFilters}=useFilterContext();
  // console.log(all_products);

  const getUniqueData=(data,property)=>{
    let newVal= data.map((curElm)=>{
      return curElm[property];      
    });

    if(property === "colors"){
      // return (newVal=["all", ...new Set([].concat(...newVal))]);  -->here we getting single array with unique color value ---2nd method
      newVal=newVal.flat();
    }
    
    return (newVal=["all", ...new Set(newVal)]);
    
    // console.log("curElm  " + newVal);
  };

  const categoryData = getUniqueData(all_products,"category");
  const companyData = getUniqueData(all_products,"company");
  const colorData = getUniqueData(all_products,"colors");
  // console.log(colorData);
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder='Search '/>
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>{categoryData.map((curElm,idx)=>{
          return <button 
          key={idx} type="button" name='category'value={curElm} onClick={updateFilterValue}
          >{curElm}</button>
        })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select name="company" id="company" className='filter-company--select' onClick={updateFilterValue}>
            {companyData.map((curElm,idx)=>{
                return <option key={idx} value={curElm} name="company" >{curElm}</option>
                 
              })
            }
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {
            colorData.map((curElm,idx)=>{
              if(curElm==="all"){
                return (
                <button key ={idx} value={curElm} name="color" type="button" className="color-all--style" onClick={updateFilterValue}>
                  All
                </button>
                )
              }
              return (
                <button key ={idx} value={curElm} name="color" type="button" style={{backgroundColor:curElm}} className={color ===curElm ?"btnStyle active":"btnStyle"}onClick={updateFilterValue}>
                  {color===curElm? <FaCheck className ="checkStyle"/>:null}
                </button>
              )
            })
          }
        </div>
      </div>
      
      <div className="filter_price">
        <h3>Price </h3>
        <p><FormatePrice price={price}/></p>
        <input type="range" name="price" min={minPrice} max={maxPrice} value={price}  onChange={updateFilterValue} />
      </div>

      <div className="filter-clear">
        <Button className='btn' onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection