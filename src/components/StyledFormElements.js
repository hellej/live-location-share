
import styled, { css } from 'styled-components'
import { StyledToolContainer } from './StyledLayout'


export const StyledFormContainer = StyledToolContainer.extend`
  padding: 15px 15px 12px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width:auto;
  display: ${props => props.display}
`

export const Input = styled.input`
height: ${props => props.height}px;
width: 100%;
line-height: 14px;
padding: 9px 16px;
margin: 8px 0;
font-size: 12px;
display: inline-block;
border: 1px solid transparent;
border-radius: 4px;
box-sizing: border-box;
//background-color: rgba(255, 255, 255, 0.5);
&::placeholder {
  color: #777777; 
  font-weight: 400; 
  letter-spacing: 3px;
}
&:focus {
  border: 1px solid #3dd5ff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  outline: none;
}
&:-webkit-autofill {
  // box-shadow: 0 0 5px rgba(0, 97, 255, 1);
  // border: 1px solid #3076dd;
  // outline: none;
  -webkit-box-shadow: 0 0 0 30px white inset;
}
${props => props.filterinput && css`
border-radius: 20px;
padding: 7px 13px;
width: 60%;
margin: 4px 3px 4px 4px;
&::placeholder { letter-spacing: 0px }
`}
`


export const Textarea = styled.textarea`
height: ${props => props.height}px;
min-height:${props => props.height}px;
width: 100%;
min-width: 100%;
max-width:100%;
max-height:40vh;
line-height: 14px;
padding: 9px 16px;
&::placeholder { 
  color: #777777; 
  font-weight: 400; 
  letter-spacing: 3px; 
}
margin: 8px 0px 5px 0px;
font-size: 12px;
display: inline-block;
border: 1px solid black;
border-radius: 4px;
box-sizing: border-box;
//background-color: rgba(255, 255, 255, 0.5);
&:focus {
  box-shadow: 0 0 5px rgba(0, 97, 255, 1);
  border: 1px solid #3076dd;
  outline: none;
}
`

