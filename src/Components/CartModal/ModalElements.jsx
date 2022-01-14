import styled from "styled-components";

export const Modal = styled.div`
    background-color: rgba(0,0,0,0.80);
    padding: 40px 20px 0 20px;    
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: #fff;
    color: #000;
    width: 60%;
    height: 60%;
    display: grid;
    grid-template-rows: 0fr 3fr 0fr;
    border-radius: 10px;

`

export const Head =  styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    margin: 10px 20px 20px 20px;
    cursor: pointer;
`

export const Content =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 20px 20px 20px
`

export const ObsField = styled.textarea`
    border-radius:8px;
    border: 1px solid #000;
    width: 70%;

    
`
export const Botao = styled.button`
    width: 75%;
    text-align: center;
    padding: 8px;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    background: #ff2351;
    border: none;
    border-radius: 8px;
    margin: 20px auto;
    cursor: pointer;
`
