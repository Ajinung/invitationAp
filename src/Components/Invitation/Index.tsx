import React, { useState, useRef } from "react";
import styled from "styled-components";
import bg from "../Assets/bg.jpg";
import logo from "../Assets/codelabLight.png";
import dummy from "../Assets/dummy.png";
import css from "../Assets/css.png";
import html from "../Assets/html.png";
import mongo from "../Assets/mongo.png";
import next from "../Assets/Next.png";
import node from "../Assets/Node.png";
import react from "../Assets/React.png";
import ts from "../Assets/ts.png";
import js from "../Assets/js.png";
import html2canvas from "html2canvas";

const Index = () => {
  const [Image, setImage] = useState<string>(dummy);
  const [name, setName] = useState<string>("");
  const [Capture, setCapture] = useState<boolean>(false);
  const [Info, setInfo] = useState<boolean>(true);

  const noSpace = name.trim();

  const ProfilePic = (e: any) => {
    const files = e.target.files[0];
    const save = URL.createObjectURL(files);
    setImage(save);
  };

  const NextSect = () => {
    setCapture(!Capture);
    setInfo(false);
  };
  const PrevSect = () => {
    setInfo(!Info);
    setCapture(false);
  };

  //capture screen
  const printRef: any = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div>
      <Container>
        {Info ? (
          <Wrapper ref={printRef}>
            <Picture>
              <img src={Image} alt="" />
              <ImageLabel htmlFor="pics">Upload your Image</ImageLabel>
              <ImageInput
                id="pics"
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                onChange={ProfilePic}
              />
            </Picture>
            <Text>
              <Logo src={logo} />
              <Title>
                <h1> tech conference invite form</h1>
              </Title>
              <NameInput
                placeholder="please enter your name"
                value={name}
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
              />

              {noSpace !== "" && Image !== dummy ? (
                <NextBtn onClick={NextSect}>Next 😎</NextBtn>
              ) : null}

              <p>
                developed by{" "}
                <a href="mailto:isaacetor7@gmail.com">Isaac Etor</a>
              </p>
              <Stacks top="30px">
                <SPic src={react} />
                <SPic src={node} />
                <SPic src={next} />
                <SPic src={mongo} />
                <SPic src={js} />
                <SPic src={ts} />
                <SPic src={html} />
                <SPic src={css} />
              </Stacks>
            </Text>
          </Wrapper>
        ) : null}

        {Capture ? (
          <Wrapper ref={printRef}>
            <Picture>
              <img src={Image} alt="" />
            </Picture>
            <Text>
              <Title2>
                <h1>
                  <b>{name}</b> will be Attending
                </h1>
              </Title2>
              <Logo src={logo} />
              <h2>Set 06</h2>
              <h3>Tech Conference</h3>
              <h2>Venue: Ajeromi Secretariat.</h2>
              <h2>
                17/12/2022 <p>10a.m W.A.T</p>
              </h2>

              <h6>
                developed by{" "}
                <a href="mailto:isaacetor7@gmail.com">Isaac Etor</a>
              </h6>
              <Stacks top="15px">
                <SPic src={react} />
                <SPic src={node} />
                <SPic src={next} />
                <SPic src={mongo} />
                <SPic src={js} />
                <SPic src={ts} />
                <SPic src={html} />
                <SPic src={css} />
              </Stacks>
            </Text>
          </Wrapper>
        ) : null}
        {Capture ? (
          <BtnHold>
            <NextBtn onClick={PrevSect}>👈🏼 Previous </NextBtn>
            <NextBtn onClick={handleDownloadImage}>
              download and share 👍🏼
            </NextBtn>
          </BtnHold>
        ) : null}
      </Container>
    </div>
  );
};

export default Index;

const SPic = styled.img`
  height: 5vh;
`;

const Stacks = styled.div<{ top: string }>`
  width: 100%;
  margin-top: ${({ top }) => top};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const BtnHold = styled.div`
  position: absolute;
  bottom: 40px;
`;

const NextBtn = styled.button`
  padding: 15px 50px;
  margin-top: 40px;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
    padding: 12px 30px;
    font-size: 12px;
    border: 1px solid #fff;
    margin-top: 20px;
  }
  @media screen and (max-width: 350px) {
    padding: 12px 25px;
    font-size: 8px;
    border: 1px solid #fff;
    margin-top: 15px;
  }

  @media screen and (min-width: 502px) and (max-width: 910px) {
    padding: 10px 25px;
    font-size: 10px;
    margin-top: 10px;
  }
`;

const NameInput = styled.input`
  width: 20vw;
  height: 5vh;
  margin-top: 20px;
  background: none;
  border: none;
  /* border-bottom: 2px solid #fff; */
  outline: none;
  color: #fff;
  font-size: 16px;

  @media screen and (max-width: 500px) {
    width: 50vw;
    margin-top: 10px;
  }
`;

const Title2 = styled.div`
  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    font-weight: 100;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 15px;
    font-size: 1.9rem;
    text-align: center;

    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
    @media screen and (max-width: 354px) {
      padding: 12px 33px;
      font-size: 1rem;
      margin-bottom: 0px;
    }
    @media screen and (min-width: 501px) and (max-width: 725px) {
      font-size: 1.3rem;
      margin-bottom: 0px;
    }
  }
`;
const Title = styled.div`
  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    font-weight: 100;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 1.1rem;
      margin-bottom: 3px;
    }
    @media screen and (min-width: 502px) and (max-width: 910px) {
      font-size: 0.5rem;
      margin-bottom: 5px;
    }
  }
`;

const Logo = styled.img`
  height: 7vh;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    height: 3vh;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  @media screen and (min-width: 502px) and (max-width: 910px) {
    height: 4vh;
    margin-top: 8px;
  }
  @media screen and (min-width: 354px) and (max-width: 501px) {
    height: 3vh;
    margin-top: 8px;
  }
`;

const ImageInput = styled.input`
  display: none;
`;
const ImageLabel = styled.label`
  padding: 20px 50px;
  margin-top: 40px;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  position: absolute;
  :hover {
    cursor: pointer;
    transform: scale(0.95);
  }

  @media screen and (max-width: 500px) {
    padding: 12px 33px;
    font-size: 12px;
    border: 1px solid #fff;
  }
`;

const Text = styled.div`
  width: 65vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  /* z-index: 10; */

  a {
    color: #fff;
    /* font-size: 6px; */
  }

  h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    font-weight: 100;
    text-transform: uppercase;
    margin: 0;
    font-size: 2rem;
    display: flex;
    text-align: center;

    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 1.5rem;
    }
    @media screen and (min-width: 500px) and (max-width: 910px) {
      font-size: 1.1rem;
    }
    @media screen and (min-width: 350px) and (max-width: 501px) {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
      margin-left: 8px;

      @media screen and (max-width: 500px) {
        text-align: center;
        font-size: 7px;
      }
      @media screen and (min-width: 502px) and (max-width: 910px) {
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }

  h3 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    font-weight: 100;
    text-transform: uppercase;
    margin: 0;
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: center;

    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 1.7rem;
    }
    @media screen and (min-width: 502px) and (max-width: 910px) {
      font-size: 1.5rem;
      margin-bottom: 6px;
    }
    @media screen and (min-width: 350px) and (max-width: 501px) {
      font-size: 1.2rem;
      margin-bottom: 4px;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (min-width: 500px) and (max-width: 910px) {
    /* height: 20vh; */
  }
  h6 {
    font-size: 16px;
    font-weight: 100;

    margin: 0;
    margin-top: 10px;
  }
`;

const Picture = styled.div`
  width: 35vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  border-right: 2px solid white;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 100%;
    border-bottom: 2px solid white;
    border-right: none;
  }
  /* @media screen and (max-width: 960px) {
    width: 100%;
    border-bottom: 2px solid white;
    border-right: none;
  } */
  @media screen and (min-width: 964px) and (max-width: 1030px) {
    width: 45vw;
    border-bottom: 2px solid white;
    border-right: none;
  }
  @media screen and (min-width: 500px) and (max-width: 910px) {
    /* width: 45vw; */
    /* width: 100%; */
    height: 30vh;
    border-bottom: 2px solid white;
    border-right: none;
  }

  img {
    height: 700px;
    width: 100%;
    position: absolute;
    /* overflow: hidden; */
    object-fit: cover;
    /* top: auto; */

    @media screen and (max-width: 500px) {
      height: 100%;
      width: 100%;
      /* position: relative; */
    }
  }
`;

const Wrapper = styled.div`
  width: 60vw;
  height: 70vh;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(10, 14, 113, 1) 0%,
    #000000 100%,
    rgba(243, 1, 112, 1) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: row;

  /* box-shadow: rgba(95, 23, 124, 0.07) 0px 1px 2px,
    rgba(60, 61, 102, 0.07) 0px 2px 4px, rgba(48, 31, 109, 0.07) 0px 4px 8px,
    rgba(64, 29, 121, 0.07) 0px 8px 16px, rgba(42, 16, 116, 0.07) 0px 16px 32px,
    rgba(57, 18, 109, 0.07) 0px 32px 64px; */

  @media screen and (max-width: 910px) {
    width: 80%;
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-color: black;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.788);
    /* position: absolute; */
  }
`;
