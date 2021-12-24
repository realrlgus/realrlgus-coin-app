import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        transition:color 0.3s ease-in-out , background-color 0.3s ease-in-out;
    }
`;

export default GlobalStyles;
