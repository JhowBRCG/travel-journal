import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    img {
        max-width: 100%;
        width: 100%;
    }

    body {
        background: #f1f2f6;
    }

`;

export default GlobalStyles;
