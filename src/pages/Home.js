import React from 'react';
// css-in-js
import styled from 'styled-components';
import PangImage from '../assest/gongjunmo.jpg';
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
  
  <Wrapper>
  
  <Header>나의 공공기관 유형 파악하기</Header>
  <Contents>
  <Title>나에게 맞는 공공기관을 찾아보자</Title>
  <LogoImage>
    <img src = 
    {PangImage} className="rounded-circle" width={350} height={350 }>
    
    </img>
  </LogoImage>
  <Desc>밸런스게임으로 파악하는 나에게 맞는 공공기관 유형 찾아보기</Desc>
  <Button>테스트 시작하기 </Button>
  </Contents>

  </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`

height: 100vh;
width: 100%;

`

const Header = styled.div`
font-size: 40pt;
display: flex;
justify-content: center;
align-items: center;

`


const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;

`
const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;

`

const Contents = styled.div`

  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`