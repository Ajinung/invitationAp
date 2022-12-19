import React from "react";
import styled from "styled-components";
import bg from "../Assets/bg.jpg";

const CaptureData = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default CaptureData;

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

  ::before {
    content: "";
    color: #fff;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.788);
    position: absolute;
  }
`;
