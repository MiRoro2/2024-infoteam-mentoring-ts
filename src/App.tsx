import styled from "styled-components";

import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Main />

      <StyledDiv></StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

enum ButtonVariants {
  disabled = "disabled",
  contained = "contained",
}

export const Button = styled.button<{ $variant: ButtonVariants }>`
  background-color: ${(props) =>
    props.$variant === ButtonVariants.disabled ? "gray" : "blue"};

  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  font-size: 16px;
  &:hover {
    background-color: ${({ $variant }) =>
      $variant === ButtonVariants.disabled ? "gray" : "darkblue"};
  }
`;

const ChildrenButton = styled(Button)<{}>``;

export default App;
