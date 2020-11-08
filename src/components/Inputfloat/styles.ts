import styled from 'styled-components';

export const InputFloat = styled.div`
    position: relative;
    padding-top: 13px;
    

    input, select{
        border-radius: 5px;
        padding-left: 5px;
        height: 40px;
        border: 1px solid lightgrey;
        border-bottom: 2px solid lightgrey;
        outline: none;
        font-size: 14px;
        transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -webkit-appearance:none;
    }

    input:focus{
        border-bottom: 2px solid #3951b2;
    }

    input::placeholder{
        color:transparent;
    }

    label{
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 24px;
        padding-left: 5px;
        transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        color: #333333;
        font-size: 14px;
    }


    input:required:invalid + label:before{
        content: '* ';
    }

    select:required:invalid + label:before{
        content: '* ';
    }

    input:focus + label,
    input:not(:placeholder-shown) + label{
        font-size: 12px;
        margin-top: 0;
        color: #3951b2;
    }
    
    select:focus + label,
    select:not(:placeholder-shown) + label{
        font-size: 12px;
        margin-top: 0;
        color: #3951b2;
    }
`;
