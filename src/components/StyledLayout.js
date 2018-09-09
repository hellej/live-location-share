import styled, { css } from 'styled-components'

export const FlexMarginAuto = styled.div`
  margin: auto;
  display: flex;
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
export const StyledMonitorDiv = styled.div`
  max-width: 95%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  letter-spacing: 0.6px;
`
export const InfoBlock = styled.div`
  display: ${props => props.hidden ? 'none' : ''};
  padding: 6px 13px 6px 13px;
  background-color: rgba(0, 40, 0, 0.95);
  margin: 5px 10px;
  border-radius: 30px;
  font-weight: 300;
  color: white;
  font-size: 17px;
  width: max-content;
  max-width: 90%;  
  overflow: auto;
  height: min-content;
  pointer-events: auto;
  ${props => props.link && css`
    width: min-content;
    max-width: 90%;
    & > a {
      color: white;
    }
  `}
  ${props => props.splitted && css`
    padding-right: 0px;
  `}
  ${props => props.button && css`
    cursor: pointer;
  `}
`
export const InfoBlockValue = styled.span`
  background-color: rgba(0, 86, 90, 0.95);
  padding: 6px 10px 6px 6px;
  border-radius 0 30px 30px 0;
  margin-left: 7px;
  pointer-events: auto;
  ${props => props.button && css`
  cursor: pointer;
  `}
`
