import { Button, Space, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logoImage from '../images/logo.png'
import './Landing.css'

const PageButton = (props) => (
  <Link to={props.linkTo} >
    <Button {...props} shape="round" type="primary">
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
  width: ${props => props.deviceType === 'mobile' ? "80%" : 'initial'};
`

export default function Landing() {
  const display = useSelector((state) => state.display)

  return(
    <Page>
      <Logo src={logoImage} alt="logo" deviceType={display.deviceType}/>
      <Typography.Paragraph>Let us help you find that <b>Mr. Purrfect</b>, swipe through a list of pets to find the one for you!</Typography.Paragraph>

      <Space>
        <PageButton
          linkTo={`match/findMeACat`}
          iconClass="fas fa-cat"
          label={`For kitty lovers`}
        />
        <PageButton
          linkTo={`match/findMeADog`}
          iconClass="fas fa-dog"
          label={`For dog lovers`}
        />
      </Space>
    </Page>
  )
}
