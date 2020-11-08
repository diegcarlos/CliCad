import styled from "styled-components";



export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const MenuBar = styled.div`
    position: relative;
    background: #c6c6c6;
    width: 50px;
    align-items: stretch;
    border-right: 1px solid #989898;
    
    div{
        display: flex;
        height: 50px;
        

        button{
            position: absolute;
            width:50px;
            height: 50px;
            right: 0px;
            background: none;
            border: none;

            &:hover{
            background: #909090;
            }
        }

    }
`;

export const TopTitle = styled.div`
    background: #c6c6c6;
    height: 50px;
    width: 100%;
    
`;

export const Content = styled.div`
    
`;