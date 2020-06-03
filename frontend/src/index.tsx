import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import App from "./screens/App";
import * as serviceWorker from "./serviceWorker";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #040b13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "RobotoCondensed";
  font-weight: 400;
  src: local("RobotoCondensed"),
    url(./assets/fonts/RobotoCondensed-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Oswald";
  font-weight: 500;
  src: local("Oswald"), url(./assets/fonts/Oswald.ttf) format("truetype");
}

@font-face {
  font-family: "PlayfairDisplay";
  font-weight: 800;
  src: local("PlayfairDisplay"),
    url(./assets/fonts/PlayfairDisplay.ttf) format("truetype");
}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Application = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <App />
      </Wrapper>
    </>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
