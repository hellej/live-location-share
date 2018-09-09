import styled from 'styled-components'

export const Button = styled.button`
border: 2px solid black;
border-radius: 5px;
color: black;
cursor: pointer;
pointer-events: auto;
background-color: rgba(255,255,255,0.85);
display: block;
font-size: 15px;
font-weight: 450;
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
`
