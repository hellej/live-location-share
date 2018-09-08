import styled, { css } from 'styled-components'

export const Button = styled.button`
border: 2px solid black;
border-radius: 5px;
color: black;
cursor: pointer;
pointer-events: auto;
background-color: rgba(255,255,255,0.85);
display: block;
font-size: 15px;
font-weight: 350;
letter-spacing: 1px;
margin: 7px 4px;
padding: 10px 13px;
text-align: center;
text-decoration: none;
transition-duration: 0.2s;
-webkit-transition-duration: 0.2s; /* Safari */
&:hover { 
  // border-color: black;
  box-shadow: inset 0 0 0 1px black;  
}
${props => props.submit && css`
  &:hover { 
    border-color: white;
    box-shadow: inset 0 0 0 0.5px white;  
  }
`}
${props => props.cancel && css`
  border: none;
  color: #f5c77d;
  font-size: 13px;
  &:hover { 
    box-shadow: inset 0 0 0 0.5px #f5c77d; 
  } 
`}
`
