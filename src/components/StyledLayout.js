import styled from 'styled-components'

export const FlexMarginAuto = styled.div`
  margin: auto;
  display: flex;
`
export const StyledMenuContainerOld = styled.div`
  position: absolute;
  top: 8px;
  left: 5px;
  right 5px;
  color: white;
  font-weight: 300;
  background: rgba(0, 0, 0,.7);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0px 0px 0px 0px;
  width:auto;
  z-index: 2;
`
export const StyledMenuContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 5px;
  right: 5px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  letter-spacing: 0.6px;
  pointer-events: none;
`
