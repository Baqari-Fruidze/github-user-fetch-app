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
  useEffect(() => {
    apiFetch("octocat");
  }, []);
  const apiFetch = async (id: string) => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    const info = await res.json();
    setData(info);
  };
  console.log(data);
  return (
    <Cover themee={themee}>
      <Header themee={themee} setThemee={setThemee} />
      <InfoMainCon themee={themee}>
        <Img src={data.avatar_url} alt="" />
        <NickNameDateCon themee={themee}>
          <LoginAndNameCon themee={themee}>
            <span className="userName">{data.name}</span>
            <span className="userLogin">{data.login}</span>
          </LoginAndNameCon>
          <p>{data.created_at}</p>
        </NickNameDateCon>
        <Para themee={themee}>
          {data.bio === null
            ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
            : data.bio}
        </Para>
        <ReposFolowersCon themee={themee}>
          <ReposCon>
            <span>Repos</span>
            <span>{data.public_repos}</span>
          </ReposCon>
          <ReposCon>
            <span>Followers</span>
            <span>{data.followers}</span>
          </ReposCon>
          <ReposCon>
            <span>Following</span>
            <span>{data.following}</span>
          </ReposCon>
        </ReposFolowersCon>
      </InfoMainCon>
    </Cover>
  );
}

const ReposCon = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const ReposFolowersCon = styled.div<{ themee: boolean }>`
  grid-column: 1/5;
  padding: 1.8rem 1.4rem 1.9rem 1.5rem;
  border-radius: 10px;
  background: ${(props) => (props.themee ? "#f6f8ff" : "#141D2F")};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const Para = styled.p<{ themee: boolean }>`
  grid-column: 1/5;
  color: ${(props) => (props.themee ? "#4b6a9b" : "#fff")};
  font-family: "Space Mono";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;
const LoginAndNameCon = styled.div<{ themee: boolean }>`
  display: flex;
  flex-direction: column;
  .userName {
    color: ${(props) => (props.themee ? "#2b3442" : "#fff")};
    font-family: "Space Mono";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .userLogin {
    color: #0079ff;
    font-family: "Space Mono";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const NickNameDateCon = styled.div<{ themee: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 2/5;
  & > p {
    color: ${(props) => (props.themee ? "#697c9a" : "#fff")};
    font-family: "Space Mono";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Img = styled.img`
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  margin-right: 1.9rem;
`;
const InfoMainCon = styled.div<{ themee: boolean }>`
  border-radius: 15px;
  background: ${(props) => (props.themee ? "#fefefe" : "#1E2A47")};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  padding: 3.3rem 2.4rem 2rem 2.4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 2.4rem;
`;
const Cover = styled.div<{ themee: boolean }>`
  padding: 3.1rem 2.4rem 7.9rem 2.4rem;
  background: ${(props) => (props.themee ? "#F6F8FF" : "#141D2F")};
`;
export default App;
