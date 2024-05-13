import styled from "styled-components";
import search from "/assets/icon-search.svg";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [themee, setThemee] = useState<boolean>(true);
  return (
    <Cover themee={themee}>
      <Header themee={themee} setThemee={setThemee} />
    </Cover>
  );
}

const Cover = styled.div<{ themee: boolean }>`
  padding: 3.1rem 2.4rem 7.9rem 2.4rem;
  background: ${(props) => (props.themee ? "#F6F8FF" : "#141D2F")};
`;
export default App;
