import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    background-color: #3ba0db;
    padding: 0 3.5rem;
    font-weight: 600;
    height: 60px;
`;
export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 10px;
`;
export const NavItem = styled.li`
    padding: 0 20px;
    text-decoration: none;
    cursor: pointer;
    list-style-type: none;
`;
export const Count = styled.span`
    border-radius: 50%;
    width: 14px;
    height: 14px;
    font-size: 12px;
    padding-top: 2px;
    line-height: 1;
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000;
    text-align: center;
    position: absolute;
    right: 87px;
    top: 11px;
`;
