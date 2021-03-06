import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const ContentContainer = styled.main`
  padding: 18px 12px;
  align-items: ${p => p.isMobile ? 'center' : 'start'};;
  display: ${p => p.isMobile ? 'flex' : 'grid'};
  flex-direction: column;
  flex: 1; 
  justify-items: center;
  grid-template-columns: ${p => !p.isMobile ? '.5fr 1fr .5fr' : ''};
  grid-template-areas: ${p => !p.isMobile ? '"left cards right"' : '""'};
`;

export const CountContainer = styled.div`
  background-color: rgba(38, 50, 56, 0.1);
  padding: 6px 18px;
  border-radius: 6px;
  font-size: 0.8rem;
  margin-top: 6px;
`;

export function HelperText(props) {
  const isCat = props.type === "findMeACat";

  return (
    <p style={{ marginTop: '8px' }}>
      <i class="fas fa-arrow-left" />
      {` swipe left to keep the ${isCat ? "cat" : "dog"} or swipe right to remove`}
      <i class="fas fa-arrow-right" />
    </p>
  );
}

export function CardCounter(props) {
  return (
    <CountContainer>
      <h2 style={{ margin: 0 }}>{props.count} left</h2>
    </CountContainer>
  );
}
