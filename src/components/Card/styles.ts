import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    min-width: 180px;
    width: fit-content;
    border-radius: 6px;
    padding: 12px;
    gap: 6px;
    height: fit-content;
    @media (max-width: 576px) {
        width: 100%;
    }
`;
export const Title = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: #3C4A5F;
`;
export const Subtitle = styled.span`
    color: #939CA9;
`;
export const DateDelivery = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    img {
        opacity: 0.5;
    }
    span {
        color: #3C4A5F;
        font-size: 0.9rem;
        font-weight: bold;
    }
`;
export const Status = styled.span`
    background-color: #FFECBC;
    color: #ad5700;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 6px;
    width: fit-content;
    padding: 2px 6px;
`;
export const ContainerButtons = styled.div`
    display: flex;
    gap: 2px;
    
`;
export const Remove = styled.button`
    border: none;
    padding: 2px;
    background-color: #DCE9FF;
    cursor: pointer;
`;
export const Edit = styled(Remove)`

`;
export const Aprove = styled(Remove)`

`;