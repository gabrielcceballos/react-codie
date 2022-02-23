import styled from 'styled-components'

interface StyleFooterProps {
    backgroundColorFooter: string;
}


export const FooterStyle = styled.footer<StyleFooterProps>`
background-color: ${props => props.backgroundColorFooter ? props.backgroundColorFooter : '#000'};

    padding-top: 100px;

    .container-flex {
        display: flex;
        justify-content: space-between;
        margin-bottom: 70px;
    }

    .menu {
        h3 {
            color: #eeeeee;
            font-weight: 700;
            letter-spacing: 4.8px;
            text-transform: uppercase;
        }

        a {
            color: #eeeeee;
            text-transform: lowercase;
            position: relative;

            svg {
                margin-right: 14px;
            }
        }

        a::after {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 1px;
            background-color: #f3f5f9;
            -webkit-transition: 0.3s;
        }

        a:hover {
            color: #f3f5f9;
        }

        a:hover::after {
            transition: 0.3s;
            width: 100%;
        }
    }

    .bottom-footer {
        width: 50%;
        display: flex;
        justify-content: space-between;

        a {
            opacity: 0.5;
            color: #eeeeee;
            font-weight: 400;
            text-transform: lowercase;
        }

        a + a {
            margin-left: 65px;
        }
    }

    .tablet {
        display: flex;
        width: 50%;
        justify-content: space-evenly;
    }

`