import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    background: #141414;
    max-width: 100%;
    min-height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
`