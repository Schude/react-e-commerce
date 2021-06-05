import styled from "styled-components";

export const Card = styled.div`
    width: 250px;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 0.5rem;
    margin: 25px 0;
    background-color: white;
    padding: 10px;
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.05);
        box-shadow: 1px 1px 8px gray;
    }
`;
export const Content = styled.div`
    width: 100%;
`;
export const ImgBox = styled.div`
    display: flex;
    max-width: 200px;
    height: 300px;
`;
export const Image = styled.img`
    max-width: 100%;
    height: 100%;
`;
export const Text = styled.p`
    // width: 100%;
    margin-bottom: 4px;
    margin-top: 13px;
    padding: 0 8px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Button = styled.button`
    border-radius: 6px;
    width: ${(props) => props.width || "180px"};
    height: ${(props) => props.height || "40px"};
    border: none;
    margin: 2px 0;
    font-weight: 600;
    background-color: ${(props) => props.bgcolor || "#fcce9f"};
    cursor: pointer;
    color: #202329;
    &:hover {
        background-color: ${(props) => props.hBGcolor || "#fca74e"};
    }
`;
