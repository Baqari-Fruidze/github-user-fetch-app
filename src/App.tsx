import styled from "styled-components";
import search from "/assets/icon-search.svg";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Picture from "./components/Picture";

type Tdata = {
  login: string;
  id: number;
  avatar_url: string;
  company: string;
  twitter_username: string;
  blog: string;
  following: number;
  location: string;
  followers: number;
  public_repos: string;
  bio: string;
  created_at: string;
  name: string;
};

function App() {
  const [themee, setThemee] = useState<boolean>(true);
  // const [data, setData] = useState();
  const apiFetch = async () => {
    const res = await fetch(`https://api.github.com/users/octocat`);
    const info = await res.json();
    // setData(info);
    console.log(info);
  };
  apiFetch();
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
