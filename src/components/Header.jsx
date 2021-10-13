
import styled from 'styled-components'
import appLogo from '../images/logo.png'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const HeaderContainer = styled.header`
  background-color: transparent;
  width: 100%;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-areas: "leftOption logo rightOption";
  padding: 6px;
  margin-bottom: 18px; 
`

const Logo = styled.img`
  justify-self: center;
  height: ${p => p.isMobile ? '45px' : '60px'};
`

export default function Header() {
  const isMobile = useSelector(state => state.display.deviceType) === 'mobile'
  
  return(
    <HeaderContainer>
      <Link to={'/'} style={{gridArea: "logo"}}>
        <Logo src={appLogo} isMobile={isMobile}/>
      </Link>
    </HeaderContainer>
  )
}