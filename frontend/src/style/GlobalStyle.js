import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Karla', sans-serif;
        font-style: normal;
        font-weight: 400;
        box-sizing: border-box;
    }
    button{
        font-family: 'Koulen', cursive;
        border: none;

        &:focus{
            outline: none;
        }
    }
`

export default GlobalStyle