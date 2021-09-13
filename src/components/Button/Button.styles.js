import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    height: 60px;
    min-width:200px;
    border-radius: 30px;
    color: var(--white);
    border: 0px;
    font-size:var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;

    cursor:pointer;

    :hover{
        opacity:0.8;
    }
`;