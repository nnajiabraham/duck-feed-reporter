import React from "react";
import styled from "styled-components";

// const Header = () => {
//   return (
//     <>
//       <header>Duck Feed Reporter</header>
//     </>
//   );
// };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <div style={{ backgroundColor: "red", width: "400px", height: "400px" }}>
        Container
      </div>
    </Container>
  );
};

export default App;
