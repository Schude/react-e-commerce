import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    max-width: 60%;
    margin: auto;
    background-color: #24282f;
`;
export const ImageBox = styled.div`
    width: 450px;
    height: 600px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    max-width: 50%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    background-color: #ececec;
    & * {
        width: 80%;
    }
    & p {
        font-size: 18px;
        line-height: 1.5;
    }
    & h1 {
        margin: 0 auto;
    }
`;
