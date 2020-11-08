import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    align-items: center; 
    justify-content: center;
    display: flex;
`;

export const Content = styled.div`
    min-width: 400px;
    background-color:#eaeaea;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    padding: 60px 0 60px 0;

    img{
        width: 130px;
        border-radius: 50%;
        margin-bottom: 10px
    }

    h3{
        margin-bottom: 15px;
    }

`;
