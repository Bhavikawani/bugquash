import React, {useState} from 'react'
import styled from "styled-components";
import Login from '../Components/Login';
import cover from '../Components/Images/cover.png'

const MainWrapper = styled.div`
 font-family: 'Montserrat', sans-serif;
`;

const ButtonSquare = styled.button`
  cursor: pointer;
  border: 0.7px solid #AC93FF;
  width: 100px;
  height: 30px;
  padding: 0;
  background-color: transparent;
  color: #AC93FF;
  margin-top: 10px;
  border-radius: 5px;
`;

const Heading = styled.h1`
 font-size: 30px;
 color: #2E244F;
`

const Title = styled.div`
 font-size: 50px;
 z-index: 1;
 color: #2E244F;
 font-weight: 600;
 margin-bottom: 25px;
`

const Purple = styled.span`
color: #AC93FF;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`

const Navbar = styled.nav`
  display: flex;
  width: 500px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`

const NavItem = styled.li`
  text-decoration: none;
  list-style: none;
  font-size: 16px;
  color: #2E244F;
  font-size: 600;
`

const Header = styled.img`
object-fit: cover;
width: 100%;
`

const Hero = styled.div`
  position: absolute;
  top: 40%;
  left: 5%;
`

const TextLight = styled.div`
  font-size: 18px;
  color: #939393;
 margin-bottom: 10px;

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
            <Navbar>
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Get Started</NavItem>
              <NavItem>Resources</NavItem>
              <NavItem>Make Payment</NavItem>
            </Navbar>
            <ButtonSquare onClick={openModal1}>
                Register
            </ButtonSquare>
            </Flex>

            <Header src={cover} />
            <Hero>
              <Title>Manage your money <br />with ease from one place. </Title>
              <TextLight>
              Track your income and expenses, analyze your financial habits <br /> and stick to your budgets.
              </TextLight>
              <ButtonSquare> Start Now</ButtonSquare>
            </Hero>


        </MainWrapper>
        </>
    )
}

export default HomePage

