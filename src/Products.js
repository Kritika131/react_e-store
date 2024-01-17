import React from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'
import styled from 'styled-components'
import { useFilterContext } from './context/filter_context'

const Products = () => {
  
  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
        <FilterSection/>
      </div>

      <section className='product-view--sort'>
        <div className="sort-filter">
          <Sort/>
        </div>
        <div className="main-porduct">
          <ProductList/>
        </div>
      </section>
    </div>
  </Wrapper>
}

const Wrapper = styled.section `
.grid-filter-column{
  display:grid;
  grid-template-columns:0.2fr 1fr;
}
@media (max-width:{({theme})=>theme.media.mobile}){
  .grid-filter-column{
    grid-template-column:1fr;
  }
}
`

export default Products