import React, {useState} from 'react'
import styled from "styled-components";
import Login from '../Components/Login';

const MainWrapper = styled.div``;

const ButtonSquare = styled.button`
  cursor: pointer;
  border: 0.7px solid #AC93FF;
  width: 100px;
  height: 30px;
  padding: 0;
  z-index: 1;
  background-color: transparent;
  color: #AC93FF;
  margin-top: 10px;
  border-radius: 5px;
`;

const Heading = styled.h1`
 font-size: 24px;
 z-index: 1;
 font-family: 'Play', sans-serif;
 color: #2E244F;
`

const Title = styled.div`
 font-size: 24px;
 z-index: 1;
 font-family: Sansation;
 font-family: 'Play', sans-serif;
 color: #2E244F;
 font-weight: 600;
`

const Purple = styled.span`
color: #AC93FF;
`

const Flex = styled.div`
  display: flex;
`

const HomePage = () => {
  const [showModal1, setShowModal1] = useState(false);

  const openModal1 = (index) => {
    setShowModal1((index) => !index);
  };
    return (
        <>
        <Login 
          showModal={showModal1}
          setShowModal={setShowModal1}
        />
        <MainWrapper>
            <Flex>
            <Heading>HEALTHY<Purple>CASH</Purple></Heading>
            <ButtonSquare onClick={openModal1}>
                Register
            </ButtonSquare>
            </Flex>
        </MainWrapper>
        </>
    )
}

export default HomePage

