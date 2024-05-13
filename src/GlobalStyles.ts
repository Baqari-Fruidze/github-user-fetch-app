import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
body{
    font-family: "Space Mono", monospace;
}
`;
