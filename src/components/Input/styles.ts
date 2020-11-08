import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContrainerProps{
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContrainerProps>`

    background: #c6c6c6;
    color: #F4EDE8;
    border-radius: 10px;
    border: 2px solid #c6c6c6;
    padding: 0 8px 0 8px;
    width:100%;
    color: #666360;

    display: flex;
    align-items: center;

    & + div{
            margin-top: 8px;
        }  
    ${props => props.isErrored && css`
        border-color: #c53030;
    `}
    ${props => props.isFocused && css`
        color: #4a4240;
        border-color: #4a4240;
    `}
    ${props => props.isFilled && css`
        color: #4a4240;
    `}
    
    input{ 
        flex: 1;
        background: transparent;
        border: 0;
        color: #4a4240;
        padding: 18px;

        &::placeholder{
            color: #666360;
        }
        
    }

    svg{
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;
   svg { 
       margin: 0;
   } 

   span{
       background: #c53030;
       color: #fff;

       &::before{
        border-color: #c53030 transparent;
       }
   }

`;