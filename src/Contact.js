import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7182.199456488322!2d84.12984259153144!3d25.83325890394662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992673b99731391%3A0xf11f2131a1aeb0b4!2z4KSw4KWM4KSo4KS_4KSv4KS-4KSwIOCkleCkn-CksOCkvg!5e0!3m2!1sen!2sin!4v1683317818908!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullscreen="" loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"></iframe>
       <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mayzvaye" method="POST" className='contact-inputs'>
            <input type="text" placeholder='username' name="username" required autoComplete='off'  />
            <input type="email" name="Email"placeholder='Email' autoComplete='off' />
            <textarea name="message"  placeholder='Enter your message' rows="10" required autoComplete='off' cols="30" rows="10"></textarea>
            <input type="submit" value="SEND"  />
          </form>
        </div>
       </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `
padding:9rem 0 1.5rem 0;
text-align:center;

.container{
  margin-top:6rem;

  .contact-form{
    max-width:50rem;
    margin:auto;
    margin-bottom:7rem;

    .contact-inputs{
      display:flex;
      flex-direction:column;
      gap:3rem;

      input[type="submit"]{
        cursor:pointer;
        transition:all 0.2s;

        &:hover{
          background-color:${({theme})=>theme.colors.white};
          border:1px solid ${({theme})=>theme.colors.btn};
          color:${({theme})=>theme.colors.btn};
          transform:scale(0.9);
        }
      }
    }
  }
}
`

export default Contact