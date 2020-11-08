import { createGlobalStyle } from 'styled-components';
import Backgroud from '../assets/backgroud.jpg'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background: url(${Backgroud}) no-repeat center;
        background-size: cover;
        -webkit-font-smoothing: antialiased; 
    }

    body, input, button {
        font-family: 'Roboto', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, strong{
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }
`;