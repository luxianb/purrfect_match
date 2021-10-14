import { Button } from 'antd';
import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const ContainerDiv = styled(animated.div)`
  position: ${p => p.index > 0 ? 'absolute' : 'relative'};
  z-index: ${p => p.index > 0 ? 3 - p.index : 3};
  top: ${p => p.index > 0 ? `${-p.index * 10}px` : 0};
  width: 100%;
`;

export const CardContainer = styled.div`
  position: relative;
  padding: 18px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(255, 23, 68, 0.2);
  display: flex;
  flex-direction: column;
  height: ${p => `${p.height}px`};
  width: ${p => p.deviceType === "mobile" ? `100%` : `${Math.floor(p.height / 16 * 9)}px`};
  margin: 0 auto;
  `;

export const PresentationCardContainer = styled.div`
  position: relative;
  padding: 18px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(255, 23, 68, 0.2);
  display: flex;
  flex-direction: column;
  height: ${p => `${p.height}px`};
  width: ${p => p.deviceType === "mobile" ? `100%` : `${Math.floor(p.height / 16 * 9)}px`};
  background-image: ${p => `url(${p.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  `;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  width: 100%;
  z-index: 2;
`;

export const CardButton = (props) => (
  <Button block shape="round" size="large" {...props}>
    {props.label}
  </Button>
);

const ExpandContainer = styled.div`
position: absolute;
top: 12px;
  right: 12px;
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255, 0.2);
`;

export const ExpandButton = (props) => (
  <ExpandContainer onClick={props.onClick}>
    <i class="fas fa-expand" style={{ margin: 0 }} />
  </ExpandContainer>
);

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex; 
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
`;

const ImageBackground = styled.div`
  background-color: white;
  background-image: ${p => `url(${p.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(6px);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
  
const Image = styled.img`
  width: 100%;
  z-index: 1;
  pointer-events: none;
`


export const CardImage = props => (
  <BackgroundContainer>
    <Image src={props.image}/>
    <ImageBackground image={props.image} />
  </BackgroundContainer>
)
