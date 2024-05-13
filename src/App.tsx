import styled from "styled-components";
import search from "/assets/icon-search.svg";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Picture from "./components/Picture";
import { Tdata } from "./components/types";

function App() {
  const [themee, setThemee] = useState<boolean>(true);
  const [data, setData] = useState<Tdata>({});
  const [userAdress, setUserAdress] = useState<string>("");
  const apiFetch = async (id: string) => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    const info = await res.json();
    setData(info);
  };
  return (
    <Cover themee={themee}>
      <Header themee={themee} setThemee={setThemee} />
      <Picture />
    </Cover>
  );
}

const Cover = styled.div<{ themee: boolean }>`
  padding: 3.1rem 2.4rem 7.9rem 2.4rem;
  background: ${(props) => (props.themee ? "#F6F8FF" : "#141D2F")};
`;
export default App;
