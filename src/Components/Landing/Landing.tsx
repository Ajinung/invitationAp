import React from "react";
import styled from "styled-components";
import bg from "../Assets/bg.jpg";
import logo from "../Assets/codelabLight.png";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <h2>Set 06</h2>
        <h3>tech Conference</h3>
        <Title>
          <Left>
            <p>Title:</p>
          </Left>
          <Right>
            <h1>
              Tech as a Leveler <br /> in the 21st century
            </h1>
          </Right>
        </Title>
        <NavLink to={"/invite"}>
          <button>get invite ❤</button>
        </NavLink>

        <h6>
          developed by <a href="mailto:isaacetor7@gmail.com">Isaac Etor</a>
        </h6>
      </Wrapper>
    </Container>
  );
};

export default Landing;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  p {
    font-size: 2.3rem;
    margin: 0;
    margin-top: 25px;
  }
`;
const Right = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 3rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 900;

    @media screen and (max-width: 520px) {
      font-size: 2.1rem;
      font-weight: 500;
      margin-top: 10px;
      line-height: 2rem;
    }
    @media screen and (min-width: 522px) and (max-width: 836px) {
      font-size: 2rem;
      font-weight: 500;
      margin-top: 10px;
      line-height: 2rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  margin-top: 25px;

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
    font-weight: 100;
    margin-top: 1px;
    margin: 0;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Logo = styled.img`
  height: 10vh;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    height: 6vh;
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 60px;
  h2 {
    margin-top: 3px;
    letter-spacing: 4px;
    margin-bottom: 0;
    text-transform: uppercase;
    margin: 0;
    font-size: 2.5rem;
    font-weight: 100;

    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 1.7rem;
    }
  }
  h3 {
    font-size: 3.5rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 900;

    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 1.7rem;
      margin-top: 10px;
    }

    @media screen and (min-width: 522px) and (max-width: 836px) {
      font-size: 2.5rem;
      font-weight: 900;
      margin-top: 10px;
      line-height: 2rem;
    }
  }

  button {
    padding: 20px 50px;
    margin-top: 40px;
    font-size: 16px;
    text-transform: capitalize;
    background: linear-gradient(
      90deg,
      rgba(10, 14, 113, 1) 0%,
      rgba(121, 9, 77, 1) 100%,
      rgba(243, 1, 112, 1) 100%
    );
    border: 2px solid white;
    border-radius: 5px;
    color: #fff;
    font-weight: 500;
    transition: all 360ms;
    :hover {
      cursor: pointer;
      transform: scale(0.95);
    }

    @media screen and (max-width: 500px) {
      padding: 12px 33px;
      font-size: 12px;
      border: 1px solid #fff;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 15px;
  }

  h6 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    font-size: 18px;
    margin: 0;
    margin-top: 10px;
    font-weight: 100;

    @media screen and (min-width: 500px) {
      font-size: 13px;
      font-weight: 100;
    }

    a {
      color: #fff;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  ::before {
    content: "";
    color: #fff;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.788);
    /* position: absolute; */
  }
`;
