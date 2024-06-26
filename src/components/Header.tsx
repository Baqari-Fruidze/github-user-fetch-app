import React from "react";
import styled from "styled-components";
import { useState } from "react";
import moon from "/assets/icon-moon.svg";
import sun from "/assets/icon-sun.svg";
import search from "/assets/icon-search.svg";

export default function Header({
  themee,
  setThemee,
  userAdress,
  setUserAdress,
  apiFetch,
}: {
  themee: boolean;
  setThemee: React.Dispatch<React.SetStateAction<boolean>>;
  userAdress: string;
  setUserAdress: React.Dispatch<React.SetStateAction<string>>;
  apiFetch: (id: string) => void;
}) {
  const themeChanger = () => setThemee(!themee);
  const handleChange = (event) => {
    event.preventDefault();
    setUserAdress(event.target.value);
  };
  const foo = () => {
    apiFetch(userAdress);
    setUserAdress("");
  };

  return (
    <>
      <Con themee={themee}>
        <p>devfinder</p>
        <Inside>
          {themee ? (
            <span className="dark">DARK</span>
          ) : (
            <span className="light">LIGHT</span>
          )}
          {themee ? (
            <img src={moon} alt="" onClick={themeChanger} />
          ) : (
            <img src={sun} alt="" onClick={themeChanger} />
          )}
        </Inside>
      </Con>
      <InputDiv>
        <Input
          onChange={handleChange}
          value={userAdress}
          name="userAdress"
          type="text"
          placeholder="Search GitHub username…"
          themee={themee}
        />
        <SearchDiv onClick={foo}>Search</SearchDiv>
      </InputDiv>
    </>
  );
}
const InputDiv = styled.div`
  position: relative;
  margin-bottom: 1.6rem;
  @media (min-width: 48rem) {
    margin-bottom: 2.4rem;
  }
`;
const SearchDiv = styled.div`
  top: 0.7rem;
  right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Space Mono";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 8.4rem;
  height: 4.6rem;
  flex-shrink: 0;
  border-radius: 10px;
  background: #0079ff;
  position: absolute;
  @media (min-width: 48rem) {
    font-size: 16px;
  }
  @media (min-width: 48rem) {
    top: 1.3rem;
    right: 1rem;
  }
`;
const Inside = styled.div`
  display: flex;
  gap: 1.6rem;
  & .dark {
    color: #4b6a9b;
    text-align: right;
    font-family: "Space Mono";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.5px;
  }
  & .light {
    color: #fff;
    text-align: right;
    font-family: "Space Mono";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.5px;
  }
`;

const Input = styled.input<{ themee: boolean }>`
  font-size: 13px;
  font-family: space-mono;
  background-image: url(${search}) !important;
  background-repeat: no-repeat !important;
  background-position: top 1.8rem left 1.6rem !important;
  width: 100%;
  padding: 2.2rem 0.7rem 2.2rem 4.6rem;
  border: none;
  border-radius: 15px;
  background: ${(props) => (props.themee ? "#fff" : " #1E2A47")};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  @media (min-width: 48rem) {
    font-size: 18px;
    padding: 2.6rem 1rem 2.6rem 8rem;
    background-position: top 2rem left 3.2rem !important;
  }
  &::placeholder {
    color: ${(props) => (props.themee ? "#4B6A9B" : "#FFF")};
    font-family: inherit;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    @media (min-width: 48rem) {
      font-size: 18px;
    }
  }
`;
const Con = styled.div<{ themee: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;

  & p {
    color: ${(props) => (props.themee ? "#222731" : "#fff")};
    font-family: "Space Mono";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
