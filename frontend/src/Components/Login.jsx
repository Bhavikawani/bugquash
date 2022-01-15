import React,{ useState} from "react";
import styled from "styled-components";
import cover from "./Images/files.png"

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000094;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Container = styled.div`
  width: 900px;
  height: 503.08px;
  border-radius: 10px;
  background: #F7F4FF;
  border: 0.7px solid #F7F4FF;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const Heading = styled.h1`
 font-size: 24px;
 z-index: 1;
 position: absolute;
 top: 200px;
 left: 295px;
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

const ButtonCircle = styled.button`
  cursor: pointer;
  border: 0.7px solid #AC93FF;
  width: max-content;
  border-radius: 40px;
  padding: 0;
  z-index: 1;
  background-color: #F7F4FF;
  position: absolute;
  top: 190px;
  right: 250px;
  & box-icon {
    width: 20px;
    height: 20px;
    margin: 10px;
    fill:  #AC93FF !important;
    background-color: #F7F4FF;
  }
`;

const ButtonSquare = styled.button`
  cursor: pointer;
  border: 0.7px solid #AC93FF;
  width: 100px;
  height: 30px;
  padding: 0;
  z-index: 1;
  background-color: #AC93FF;
  color: #FFFFFF;
  margin-top: 10px;
  border-radius: 5px;
`;

const FlexDiv = styled.div`
display: flex;
justify-content: space-between;
`

const Component = styled.div`
display: flex;
flex-direction: column;
width: 529px;
justify-content: center;
align-items: center;
`

const Form = styled.div`
  z-index: 0;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  font-size: 16px;
  width: 188.87px;
  border: 1px solid #AC93FF;
  border-width: 0 0 1px 0;
  background-color: transparent;
  margin-bottom: 15px;
  &::placeholder {
    color:  rgba(172, 147, 255, 0.45);;
  }
`;

const Modalimg = styled.img`
  z-index: 0;
`
const Purple = styled.span`
color: #AC93FF;
`

const Login = ({
    showModal,
    setShowModal,
}) => { 

  return (
    <>
    {showModal ? (
        <Modal>
          <Container>
              
              <FlexDiv>
                  <Component>
                  <Heading>HEALTHY<Purple>CASH</Purple></Heading>
                  <ButtonCircle
                    onClick={() => {
                    setShowModal(false);
                   }}>
                     <box-icon name="x"></box-icon>
                  </ButtonCircle>
                    <Title>Create <Purple>an account</Purple></Title>
                  <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                  </Form>
                  <ButtonSquare>Sign Up</ButtonSquare>
                  </Component>
                  <Modalimg src={cover} />
              </FlexDiv>
          </Container>
        </Modal>
    ) : null}
    </>
  );
};

export default Login;
