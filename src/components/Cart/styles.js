import styled from "styled-components";

export const CartContainer = styled.div``;
export const Payment = styled.div`
    display: flex;
    // width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 80%;
    padding: 8px 0;
    background-color: #3ba0db;
    margin: 0 auto;
    & p {
        font-size: 20px;
        margin: 0;
        margin-left: 40px;
        font-weight: 600;
    }
    & button {
        margin-right: 40px;
    }
`;
