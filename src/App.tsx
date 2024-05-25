import styled from "styled-components";
import search from "/assets/icon-search.svg";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Tdata } from "./components/types";
import location from "/assets/icon-location.svg";
import webSite from "/assets/icon-website.svg";
import twitter from "/assets/icon-twitter.svg";
import company from "/assets/icon-company.svg";

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
          <ReposCon themee={themee}>
            <p>Repos</p>
            <span>{data.public_repos}</span>
          </ReposCon>
          <ReposCon themee={themee}>
            <p>Followers</p>
            <span>{data.followers}</span>
          </ReposCon>
          <ReposCon themee={themee}>
            <p>Following</p>
            <span>{data.following}</span>
          </ReposCon>
        </ReposFolowersCon>
        <LocationBottomCon>
          <MiniCons themee={themee}>
            <img src={location} alt="" />
            <p>{data.location}</p>
          </MiniCons>
          <MiniCons themee={themee}>
            <img src={webSite} alt="" />
            <p>{data.blog}</p>
          </MiniCons>
          <MiniCons themee={themee}>
            <img src={twitter} alt="" />
            {data.twitter_username === null ? (
              <p>Not Available</p>
            ) : (
              <p>{data.twitter_username}</p>
            )}
          </MiniCons>
          <MiniCons themee={themee}>
            <img src={company} alt="" />
            {data.company === null ? (
              <p>Not Available</p>
            ) : (
              <p>{data.company}</p>
            )}
          </MiniCons>
        </LocationBottomCon>
      </InfoMainCon>
    </Cover>
  );
}

const MiniCons = styled.div<{ themee: boolean }>`
  align-items: center;
  display: flex;
  gap: 2rem;
  & p {
    color: ${(props) => (props.themee ? "#4b6a9b" : "#fff")};
    font-family: "Space Mono";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const LocationBottomCon = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;
const ReposCon = styled.div<{ themee: boolean }>`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  & > p {
    color: ${(props) => (props.themee ? "#4b6a9b" : "#fff")};
    text-align: center;
    font-family: "Space Mono";
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & > span {
    color: ${(props) => (props.themee ? "#2b3442" : "#fff")};
    text-align: center;
    font-family: "Space Mono";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
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
  padding: 3.3rem 2.4rem 4.8rem 2.4rem;
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
