import styled from "styled-components";

export const ClientsCarouselStyles = styled.section`
padding-top: 100px;
padding-bottom: 100px;
background-color: #000;

.title-section {
    color: #eeeeee;
    text-transform: uppercase;
    margin-bottom: 50px;
}

.content-clientes {
}

.item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center
}

.box-logo {
    max-width: 190px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    
    img {
        filter: grayscale(1);
    }
}

.box-logo:hover {
    img {
        filter: grayscale(0);
    }
}

.content-clientes {


    .container-infinite {
        position: relative;
        height: 100px;
        overflow: hidden;
    }

    .infinite {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        animation: InfiniteScroll 10s infinite linear;


        a {
            img {

            }
        }
    }
}

@keyframes InfiniteScroll {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-50%);
    }
}

`