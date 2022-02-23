import styled from 'styled-components'

export const PortfolioStyle = styled.div`
    position: relative;

    .container-flex {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 105%;
    }

    .texto {
        padding-top: 180px;
        padding-left: 257px;
    }

    .item {
        height: 105vh;
        padding-bottom: 100px;
    }

    .title-section {
        color: #fff;
        margin-bottom: 110px;
    }

    .size30 {
        color: #fff;
        margin-bottom: 160px;
    }

    .title {
        margin-bottom: 50px;
    }

    .botao {
        display: flex;
        justify-content: flex-end;
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
    }

    .image {
        height: 790px;

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

    .owl-theme {
        .owl-nav.disabled + .owl-dots {
            margin-top: 10px;
            position: absolute;
            bottom: 5px;
            left: 0;
            right: 0;
        }
    }
`