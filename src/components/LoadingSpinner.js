import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const rainbow = keyframes`
  0% { border-color: red; }
  17% { border-color: orange; }
  33% { border-color: yellow; }
  50% { border-color: green; }
  67% { border-color: blue; }
  83% { border-color: indigo; }
  100% { border-color: violet; }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; // Fixed height to avoid pushing content
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid transparent;
  border-top: 5px solid #000;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite, ${rainbow} 5s linear infinite;
`;

const LoadingSpinner = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);

export default LoadingSpinner;
