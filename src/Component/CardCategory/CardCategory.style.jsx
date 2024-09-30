import styled from 'styled-components';

export const WrapperCategory = styled.div`
    border: 2px solid rgb(144, 144, 144);
    width: 150px;
    text-align: center; 
    height: 130px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    
    &:hover{
        border: 2px solid red;
        background-color: red;
        color: white;
    }

    &:hover img {
        filter: brightness(0) invert(1); 
    }

    &:hover h1 {
        color: white;
    }

`
export const Text = styled.h1`
    font-size: 15px;
    font-weight: normal;
    color: black;
    background-color: transparent;
`

export const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 15px;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
`
export const DivImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; 
    background-color: transparent;
`



