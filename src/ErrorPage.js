import React from 'react'
import styled from 'styled-components'
import { Button } from './components/Button'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost</h3>
          <p>
            The page you are looking for does not exist. How you get here is a mystery. But you can click the button below to go back to the homepage.
          </p>
          <Button><NavLink to="/">Go Back to Home</NavLink></Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.container{
  padding:12rem 0;
  text-align:center;

}
h2{
  font-size:9rem;
}
h3{
  font-size:4rem;
}
p{
  margin:2rem 0;
}
`
export default ErrorPage