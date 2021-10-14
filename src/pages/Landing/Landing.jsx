import { Button, Space } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BreedSelector from '../../components/BreedSelector'
import logoImage from '../../images/logo.png'
import './Landing.css'

const PageButton = (props) => (
  <Link to={props.linkTo} >
    <Button {...props} type="primary" size="large" >
      {props.label}
      <i class={props.iconClass} />
    </Button>
  </Link >
)

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Logo = styled.img`
  height: ${props => props.deviceType === 'mobile' ? "initial" : "100px"};
  width: ${props => props.deviceType === 'mobile' ? "90%" : 'initial'};
`

export default function Landing() {
  const display = useSelector((state) => state.display);

  return(
    <Page>
      <Space size="large" direction="vertical">
        <div>
          <Logo src={logoImage} alt="logo" deviceType={display.deviceType}/>
          <p>Let us help you find that <b>Mr. Purrfect</b>, swipe through a list of pets to find the one for you!</p>
        </div>

        <div style={{marginTop: '16px'}}>
          <h3>Pick a category to get started</h3>
          <Space style={{marginBottom: '16px'}} size="middle">
            <PageButton
              linkTo={`match/findMeACat`}
              iconClass="fas fa-cat"
              label={`For kitty lovers`}
              className="selectCat"
              />
            <PageButton
              linkTo={`match/findMeADog`}
              iconClass="fas fa-dog"
              label={`For dog lovers`}
              className="selectDog"
            />
          </Space>
        </div>

        <div>
          <h3>Already have a breed in mind?</h3>
          <BreedSelector />
        </div>
      </Space>
    </Page>
  )
}
