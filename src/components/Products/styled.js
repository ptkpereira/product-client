import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;

    input, textarea {
        display: block;
        width: 80%;
        margin: 3px auto;
        padding: 5px;
        border: none;
        font-family: sans-serif;
    }

    #form > button {
        display: block;
        width: 80%;
        margin: 0 auto;
        padding: 8px;
        background: #fff333;
        border: none;
    }
`

export const Card = styled.div`
    background: #111111;
    color: #fff;
    width: 80%;
    height: 40%;
    margin: 10px auto;
    padding: 5%;
    box-shadow: 1px 2px 10px #000;
`

export const Title = styled.h2`
    font-size: 2rem;
`

export const Description = styled.p`
    font-size: 1rem;
`

export const Link = styled.a`
    text-decoration: none;
    color: #fff333;
`

export const Action = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;
`

export const EditBtn = styled.i`
    color: #ffffff;
    border: none;
    padding: 5px;
    cursor: pointer;
`

export const DeleteBtn = styled(EditBtn)`
    color: red;
`