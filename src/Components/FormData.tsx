import React, { useState } from "react";
import styled from "styled-components";
import dummy from "../Components/Assets/dummy.png";
import ViewInfo from "./ViewInfo";
import logo from "../Components/Assets/codelabLight.png";

const FormData: React.FC = () => {
  const [view, setView] = useState<boolean>(false);
  const [info, setInfo] = useState<boolean>(true);
  const [image, setImage] = useState<string>(dummy);
  const [name, setName] = useState<string>("");

  const displayPix = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
  };

  const SetInform = () => {
    setInfo(true);
    setView(false);
  };
  const ViewInform = () => {
    setView(!view);
    setInfo(false);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <ButtonHolder>
            <button onClick={SetInform}>Add Info</button>

            {/* <button onClick={ViewInform}>View Info</button> */}
          </ButtonHolder>
          {info ? (
            <AddInfoWrapper>
              <ImageInfo>
                <Image src={image} />
                <ImageLabel htmlFor="pics">Enter your Image:</ImageLabel>
                <ImageInput
                  id="pics"
                  type="file"
                  accept="image/jpg, image/png, image/jpeg"
                  onChange={displayPix}
                />
              </ImageInfo>
              <Input
                placeholder="enter your name please"
                value={name}
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
              />

              <br />
              <br />
              <br />

              {name !== "" && image !== dummy ? (
                <ButtonHolder>
                  <button onClick={ViewInform}>next</button>
                </ButtonHolder>
              ) : null}
            </AddInfoWrapper>
          ) : null}
          {view ? (
            <AddInfoWrapper>
              <Box2>
                <Logo>
                  <img src={logo} alt="" />
                </Logo>
                <Title>
                  <h1>I will be attending</h1>
                </Title>
                <Content>
                  <Message></Message>
                  <Picture>
                    <img src={image} alt="" />
                    <p>{name}</p>
                  </Picture>
                </Content>
                <Stacks>stack</Stacks>
              </Box2>
            </AddInfoWrapper>
          ) : null}
        </Wrapper>
      </Container>
    </div>
  );
};

export default FormData;

const Stacks = styled.div`
  width: 100%;
  height: 10vh;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div`
  width: 40%;
  height: 100%;
  background-color: #1f1818;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const Picture = styled.div`
  width: 50%;
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  img {
    height: 250px;
    width: 250px;
    border-radius: 10%;
    border: 2px solid #fff;

    @media screen and (max-width: 960px) {
      width: 100%;
      height: 130px;
      width: 130px;
    }
    P {
      margin: 0;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 45vh;
  /* background-color: red; */
  margin-top: 5px;

  @media screen and (max-width: 960px) {
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
    font-size: 2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    color: #ffffffdf;
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
    margin-top: 10px;
    height: 35px;
  }
`;

const Box2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* background-color: pink; */
`;
const AddInfoWrapper = styled.div`
  width: 100%;
  height: 75%;
  box-shadow: rgba(0, 0, 0, 0.692) 0px 5px 15px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgb(10, 14, 113);
  background: linear-gradient(
    90deg,
    rgba(10, 14, 113, 1) 0%,
    rgba(121, 9, 77, 1) 100%,
    rgba(243, 1, 112, 1) 100%
  );
`;
const ButtonHolder = styled.div`
  display: flex;
  button {
    width: 150px;
    height: 60px;
    margin-right: 30px;
    border-radius: 10px;
    border: 0;
    font-size: 16px;
    font-weight: 600;
    transition: all 360ms;

    :hover {
      cursor: pointer;
      transform: scale(0.98);
    }
  }
`;
const Input = styled.input`
  border: 1px solid #000;
  height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  outline: none;
  font-size: 18px;

  ::placeholder {
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  background-color: #18024b;
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  margin: 15px 0;
  transition: all 360ms;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10%;
  border: 2px solid #fff;
  object-fit: cover;
  box-shadow: rgb(37, 37, 37) 0px 2px 5px -1px, rgb(43, 42, 42) 0px 1px 3px -1px;
`;

const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  /* height: 100vh; */
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #0a0e71;
`;
