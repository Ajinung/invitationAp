import React from "react";
import styled from "styled-components";
import logo from "../Components/Assets/codelabLight.png";

interface Cardprop {
  img: string;
}

const ViewInfo: React.FC<Cardprop> = ({ img }) => {
  return (
    <div>
      {/* <Container> */}
      {/* <Wrapper> */}
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <Title>
        <h1>I will be attending</h1>
      </Title>
      {/* <Content>
            <Message>
              <h1>Tech as a leveler</h1>
              <h2>Tech Conference</h2>
              <h3>17/12/2022</h3>
              <h4>
                <p>Venue:</p>
                <h5>Ajeromi Ifelodun Secretariat</h5>
              </h4>
            </Message>
            <Image>
              <Holder>
                <img src={img} alt="" />
              </Holder>
            </Image>
          </Content>
          <Stacks></Stacks>
        </Wrapper> */}
      {/* </Container> */}
    </div>
  );
};

export default ViewInfo;
const Holder = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid black;

  img {
    height: 100%;
  }
`;

const Image = styled.div`
  background-color: rgb(154, 152, 251);
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const Message = styled.div`
  background-color: #fbd898;
  width: 37%;
  height: 100%;
  padding: 0px 0px 0px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  h1 {
    margin: 0;
    width: 350px;
    font-size: 4rem;
    line-height: 3.3rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    color: #020749;

    @media screen and (max-width: 960px) {
      font-size: 2.7rem;
      margin-top: 10px;
    }
  }
  h2 {
    margin: 0;
    margin-top: 10px;
    width: 300px;
    font-size: 2rem;
    /* line-height: 3.3rem; */
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    color: #020749;
  }
  h3 {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h4 {
    margin: 0;
    margin-bottom: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    h5 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
`;
const Stacks = styled.div`
  height: 20vh;
  background-color: palegreen;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
const Content = styled.div`
  width: 100%;
  background-color: red;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    /* flex-direction: column; */
  }
  @media screen and (max-width: 420px) {
    flex-direction: column-reverse;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    color: #ffffffea;
    margin-top: 7px;

    @media screen and (max-width: 960px) {
      font-size: 1.5rem;
    }
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 35px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;

  @media screen and (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
