import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`


    background: #4a4240;
    height:56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width:100%; 
    font-weight: bold;
    margin-top:16px;
    transition: background-color 0.2s;
    font-weight: lighter;

    &:hover{
        background: ${shade(0.2, '#4a4240')};
    }


`;