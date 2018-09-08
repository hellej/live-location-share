import styled from 'styled-components'
import FaLocationArrow from 'react-icons/lib/fa/location-arrow'

export const StyledFaLocationArrow = styled(FaLocationArrow)`
  color: ${props => props.sharing === 1 ? 'red' : 'white'};
  margin: -3px 2px 0 0;
  transition-duration: 0.2s;
  font-size: 19px;
  &:hover { 
    color: #00f2ff;
  }
`
