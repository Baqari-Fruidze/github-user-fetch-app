import React from "react";
import styled from "styled-components";
import { useState } from "react";
import moon from "/assets/icon-moon.svg";
import sun from "/assets/icon-sun.svg";

export default function Header({
  themee,
  setThemee,
}: {
  themee: boolean;
  setThemee: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const themeChanger = () => setThemee(!themee);

  return (
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
  );
}

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
const Con = styled.div<{ themee: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    color: ${(props) => (props.themee ? "#222731" : "#fff")};
    font-family: "Space Mono";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
