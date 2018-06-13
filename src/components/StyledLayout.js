
import styled from 'styled-components'


export const StyledMenuContainer = styled.div`
  background: rgba(0, 0, 0,.7);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  left: 10px;
  margin: 0px 10px 0px 0px;
  position: absolute;
  padding: 2px 4px;
  top: 4px;
  width: 100 px;
  z-index: 2;
  @media (max-width: 370px) {
    padding: 1px 2px;
  }
`


export const StyledToolContainer = styled.div`
  border-radius: 7px;
  position: absolute;
  z-index: 2;
  top: ${props => props.top ? props.top : '4'}px;
  left: ${props => props.left ? props.left : '10'}px; 
  width: 230px;
  background: rgba(0, 0, 0,.7);
  max-width: 60%;
  min-width: 130px;
  max-height: calc(100% - ${props => props.mheight ? props.mheight : '90'}px);
  overflow-y: auto;
  // overflow-y: scroll;
`
