import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
`;

export const Menu = styled.div`
    height: 100vh;
    border-right: 1px solid #dedede;
    background: #f8f9fa;
    transition: 0.5s;
    
    div{
        width: 100%;
        

        button{
            float: right;
            width: 50px;
            height:50px;
            background: none;
            border: none;

            &:hover{
                background: #d1d1d1;
            }
        }
    }
    
`;

export const ListMenu = styled.div`
    z-index: 0;
    #cssmenu,
    #cssmenu ul,
    #cssmenu ul li,
    #cssmenu ul ul {
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
    }
    #cssmenu ul {
        position: relative;
        float: left;
    }
    #cssmenu ul li {
        float: left;
        min-height: 1px;
        line-height: 1em;
        vertical-align: middle;
    }
    #cssmenu ul li.hover,
    #cssmenu ul li:hover {
        position: relative;
        cursor: pointer;
    }
    #cssmenu ul ul {
        margin-top: 1px;
        visibility: hidden;
        top: 1px;
        left: 99%;  
        width: 100%;
    }
    #cssmenu ul ul li {
        float: none;
    }
    #cssmenu ul ul ul {
        top: 1px;
        left: 99%;
    }
    #cssmenu ul li:hover > ul {
        visibility: visible;
    }
    #cssmenu ul li {
        float: none;
    }
    #cssmenu ul ul li {
        font-weight: normal;
    }
    /* Custom CSS Styles */
    #cssmenu {
        position: relative;
        max-width: 220px;
        margin-top: 65px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;    
        
    }
    #cssmenu ul a,
    #cssmenu ul a:link,
    #cssmenu ul a:visited {
        z-index: 0;
        display: block;
        color: #848889;
        text-decoration: none;
        font-weight: 300;
    }
  
    #cssmenu > ul {
        float: none;
    }
    #cssmenu ul {
        background: #f8f9fa;
    }
    #cssmenu > ul > li {
        border-left: 3px solid #d7d8da;
    }
    #cssmenu > ul > li > a {
        padding-left: 10px;
        padding-bottom: 20px;
        padding-top: 10%;
        justify-items: center;
        align-content: center;
        
    }
    svg{
        margin-right: 20px;
        }

    #cssmenu > ul > li:hover {
    border-left: 3px solid #f17b7b;
    }
    #cssmenu ul li:hover > a {
    color: #f17b7b;
    }
    #cssmenu > ul > li:hover {
    background: #ffffff;
    }
    /* Sub Menu */
    #cssmenu ul ul a:link,
    #cssmenu ul ul a:visited {
    font-weight: 400;
    font-size: 14px;
    }
    #cssmenu ul ul {
    width: 180px;
    background: none;
    border-left: 20px solid transparent;
    }
    #cssmenu ul ul a {
    padding: 8px 0;
    border-bottom: 1px solid #eeeeee;
    }
    #cssmenu ul ul li {
    padding: 0 20px;
    background: #fff;
    }
    #cssmenu ul ul li:last-child {
    border-bottom: 3px solid #d7d8da;
    padding-bottom: 10px;
    }
    #cssmenu ul ul li:first-child {
    padding-top: 10px;
    }
    #cssmenu ul ul li:last-child > a {
    border-bottom: none;
    }
    #cssmenu ul ul li:first-child:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        left: -20px;
        top: 13px;
        border-left: 10px solid transparent;
        border-right: 10px solid #fff;
        border-bottom: 10px solid transparent;
        border-top: 10px solid transparent;
    }
    .cssmenu ul li span {
        display: none;
        transition: 2s;
    }

    .cssmenuON  {
        min-width: 220px;
        transition: 2s;
    }
`;


export const ContentT = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.header`
    height: 56px;
    max-width: 100%;
    color: #9a9da0;
    background: #343a40;
    border-bottom: solid 1px #d1d1d1;
    display: flex;
    
    
    
    h3 {
        margin: 0 auto;
        padding-top: 15px;
    }

    img{
        
        margin-left: 10px;
        margin-top: 5px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

export const Content = styled.main`
    margin: 5px;
    height: 100%;
    padding: 10px;
    max-width: 100%;
    background: #f8f9fa;    
    border: solid 1px #d1d1d1;
    border-radius: 5px;

`;