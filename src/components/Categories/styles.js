import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 20px 0;
    background-color: #fcce9f;
    & ul {
        list-style-type: none;
    }
`;

export const CategoryList = styled.ul`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    width: 60%;
    margin: 0 auto;
`;

export const ListItem = styled.li`
    background-color: #3ba0db;
    padding: 10px 20px;
    text-transform: capitalize;
    margin: 0 20px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        background-color: #2280f6;
    }
`;
