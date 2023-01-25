import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 30px;
    bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 6px;
    z-index: 99;
    cursor: pointer;
`;
export const Button = styled.div`
    display: flex;
    align-items: center;
    background-color: #0B66FF;
    color: #FFF;
    width: fit-content;
    padding: 12px;
    border-radius: 4px;
    :hover{
        background-color: #2b7aff;
    }
    img{
        margin-left: 4px;
        opacity: 1;
        filter: invert(1);
    }
`;