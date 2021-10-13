import {Link} from 'react-router-dom';
import styled from 'styled-components';



const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  justify-content: space-around;
  background-color: rgba(255, 23, 68, 0.1);
  padding: 12px;
  border-radius: 6px;
  margin: 6px;
  margin-top: 0;
  /* box-sizing: border-box; */
`
const NavItemContainer = styled.div`
  display: flex;
  flex: 1;
  color: #FF1744;
  font-size: 24px;

`

const NavigationItem = (props) => {
  return(
    <Link to={props.to}>
      <NavItemContainer>
        <i className={props.icon} />
      </NavItemContainer>
    </Link>
  )
}

export default function NavigationBar() {
  return(
    <NavContainer>
      <NavigationItem
        to="/match/findMeACat"
        icon="fas fa-cat"
      />
      <NavigationItem
        to="/"
        icon="fas fa-home"
      />
      <NavigationItem
        to="/match/findMeADog"
        icon="fas fa-dog"
      />
    </NavContainer>
  )
}