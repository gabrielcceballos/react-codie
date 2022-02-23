import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #0000ef;
    --container: 1380px;
}

body {
    overflow-x: hidden !important;
}

.error-message {
    font-size: 12px;
}

html {
    scroll-behavior: smooth !important;
}

*:focus {
    outline: transparent !important;
}

.uppercase {
    text-transform: uppercase;
}

a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;

    svg,
    img {
        transition: 0.25s;
    }
}

a:hover,
button:hover {
    transition: 0.25s;

    svg,
    img {
        transition: 0.25s;
    }
}

a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}

.container-codie {
    max-width: calc(100% - 20vw - 100px);
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (max-width: 1400px) {
    .container-codie {
    max-width: calc(100% - 18vw - 50px);
}
}
`;
