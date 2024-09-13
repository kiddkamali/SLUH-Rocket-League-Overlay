import styled from "styled-components";

export const ScorebugWrapper = styled.div`
    width: 2560px;
    height: 600px;
    background-color: black;
`

export const ScorebugClock = styled.div`
    height: 6.6vh;
    width: 12.4vw;
    background-color: red;
    clip-path: polygon(25.8% 100%, 74.2% 100%, 100% 0, 0 0);
    position: fixed;
    left: 43.8vw;
    top: 9.4vh;
    color: white;
    text-align: center;
`
export const ScorebugOrange = styled.div`
    height: 15vh;
    width: 40vw;
    clip-path: polygon(0 0, 92% 56%, 100% 100%, 28% 94%);
    position: fixed;
    left: 7vw;
    top: 1vh;
    background-color: orange;
    color: black;
    font-size: 24px
`

export const ScorebugBlue = styled.div`
    height: 15vh;
    width: 40vw;
    clip-path: polygon(100% 0, 8% 56%, 0% 100%, 72% 94%);
    position: fixed;
    right: 7vw;
    top: 1vh;
    background-color: blue;
    color: white;
    font-size: 24px
`