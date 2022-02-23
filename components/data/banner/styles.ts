import styled from "styled-components";

export const BannerStyle = styled.section`
  color: #ffffff;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;

  .mouse {
    display: block;
    width: 25px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #fff;
    text-align: center;
    margin-right: 10px;

    &::before {
      content: "";
      display: inline-block;
      width: 2px;
      height: 8px;
      position: relative;
      border-radius: 4px;
      background: #fff;
      animation-name: mouse;
      animation-duration: 0.7s;
      animation-iteration-count: infinite;
    }
  }

  @keyframes mouse {
    from {
      top: 0px;
    }

    to {
      top: 6px;
    }
  }

  .container-codie {
    min-height: calc(100vh - 107px);
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10vh;

    .flex-transparent-justify-between {
      height: 30px;
    }
  }

  .carousel {
    min-height: inherit;
    position: absolute;
    top: 0;
    left: 0;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
      height: 100vh;
    }
  }

  .scroll {
    a {
      display: inline-flex;
      color: #ffffff;
      font-weight: 700;
      text-transform: lowercase;

      svg {
        margin-right: 21px;
      }
    }
  }

  .titulos {
    .subTitle {
    display: block;
      margin-bottom: 20px;
    }

    h1 {
        line-height: 73px;
        margin-bottom: 0;
    }

    h1 + * {
        margin-top: 18px;
    }
  }

  .menu-banner {
    margin-bottom: 20px;
    ul {
      display: flex;

      li + li {
        margin-left: 61px;
      }
    }

    a {
      color: #ffffff;
      font-weight: 500;
      text-transform: lowercase;
      position: relative;
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

  @media only screen and (max-width: 768px) {
    .menu-banner {
      display: none;
    }

    .container-codie {
      align-items: center;
      text-align: center;
    }
  }
`;
