import styled from 'styled-components';

import { Overlay, Content, Close } from '@radix-ui/react-dialog';

export const DialogOverlay = styled(Overlay)`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.44);
`;

export const DialogContent = styled(Content)`
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 30px;
    border-radius: 4px;
    min-width: 400px;
    @media (max-width: 576px) {
        height: 100vh;
        width: 100vw;
        border-left: solid 2px tomato;
    }
    form{
        *{font-size: 1rem;}
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 14px;
        input, select, textarea{
            font-size: 1rem;
            padding: 8px;
            background-color: #F4F8FB;
            border: none;
            border-radius: 4px;
            &:focus {
                outline: none;
                /* box-shadow: 0px 0px 2px #2d82ab; */
            }
        }
        button{
            background-color: #DDF3E4;
            border-radius: 4px;
            padding: 6px;
            color: #18794e;
            font-weight: 500;
            border: none;
            cursor: pointer;
        }
    }
`;
export const CloseButton = styled(Close)`

`;