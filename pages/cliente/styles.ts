import styled from 'styled-components'


interface ClienteStyleProps {
    backgroundColor?: string;
    color?: string;
}

export const ClienteStyle = styled.div<ClienteStyleProps>`
background-color: ${props => props.backgroundColor ? props.backgroundColor : '#000'};

#banner-cliente {
    color: #fff;

    .col-md-5 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .infos {
        margin-bottom: 205px;
    }

    .status {
        color: #eeeeee;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 8px;
        text-transform: uppercase;
        margin-right: 49px;
    }

    .categoria {
        color: #ffffff;
        font-family: Objective;
        font-size: 16px;
        font-weight: 400;
    }

    .categoria + .categoria {
        margin-left: 25px;
    }

    a {
        display: block;
        color: #fff;
    }

    .image {
        height: 992px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .owl-nav {
        position: absolute;
        bottom: 93px;
        left: 13%;
    }
}

#sobre-cliente {
    padding-top: 40px;
    padding-bottom: 60px;

    p {
        max-width: 850px;
        width: 100%;
        color: ${props => props.color}
    }
}

#imagens-clientes {
    .item {
        max-width: 336px;
        width: 100%;
        /*        height: 728px;*/
    }

    .row + .row {
        margin-top: 16px;
    }

    img {
        width: 100%;
    }
}

#contato {
    padding-top: 150px;
    padding-bottom: 64px;


    .title-section {
        margin-bottom: 38px;
    }

    .opcoes {
        max-width: 536px;
        width: 100%;

        ol {
            li {
                padding: 22px 0;
                border-bottom: 1px solid #fff;
            }

            a {
                color: #eeeeee;
                font-weight: 400;
                text-transform: lowercase;

                span {
                    font-weight: 700;
                }
            }
        }
    }


    form {


        input, select, option {
            width: 100%;
            height: 48px;
            background-color: #eeeeee;
            padding-left: 23px;
            margin-bottom: 16px;
            border: none;
        }

        input::placeholder, textarea::placeholder {
            color: #000000;
            font-weight: 400;
            text-transform: lowercase;
        }

        textarea {
            width: 100%;
            height: 158px;
            background-color: #eeeeee;
            padding-left: 23px;
            padding-top: 19px;
            border: none;
            margin-bottom: 24px;
        }

        button {
            border: none;
            background-color: transparent;
            color: #ffffff;
            font-weight: 700;
            letter-spacing: 8px;
            text-transform: uppercase;
            margin: 0 auto;
        }
    }

    .button {
        display: flex;
    }
}

`