import { Button, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

import logoImage from '../images/logo.png'
import './Landing.css'

const PageButton = (props) => (
  <Link to={props.linkTo} >
    <Button {...props} type="primary">
      {props.label}
      <i class={props.iconClass} />
    </Button>
  </Link >
)

export default function Landing() {
  return(
    <div style={{flex: 1, minHeight: '100vh', minWidth: '100vw', alignItems: 'center',  display: 'flex', flexDirection: 'column'}}>
      <img src={logoImage} alt="logo" className="landingLogo"/>
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
    </div>
  )
}
