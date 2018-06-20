import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'


const activeClassName = 'active'
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  color: white;
  cursor: pointer;
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
    border-color: white;
    box-shadow: inset 0 0 0 1px white;  
  }
  &.${activeClassName} {
    border-color: white;
    box-shadow: inset 0 0 0 0.5px white;  
  }
  @media (max-width: 370px) {
    font-size: 13px;
    padding: 4px 7px;
  }
`



export const Button = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 300;
  margin: auto;
  padding: 6px 13px;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s; /* Safari */
  // @media (max-width: 370px) {
  //   font-size: 12px;
  //   padding: 5px 8px;
  // }
${props => props.submit && css`
  &:hover { 
    border-color: white;
    box-shadow: inset 0 0 0 0.5px white;  
  }
`}
${props => props.signup && css`
  border: none;
  color: white;
  margin-left: 10px;
  &:hover { 
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
