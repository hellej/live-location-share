
import styled from 'styled-components'


export const StyledMenuContainer = styled.div`
  top: 4px;
  left: 10px;
  right 45px;
  background: rgba(0, 0, 0,.7);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0px 10px 0px 0px;
  position: absolute;
  padding: 2px 5px;
  //width: 200px;
  width:auto;
  z-index: 2;
  @media (max-width: 370px) {
    padding: 1px 2px;
  }
`


export const StyledToolContainer = styled.div`
  top: 4px;
  left: 10px;
  right 55px;
  border-radius: 7px;
  position: absolute;
  z-index: 3;
  background: rgba(0, 0, 0,.7);
  min-width: 130px;
  // overflow-y: scroll;
`
