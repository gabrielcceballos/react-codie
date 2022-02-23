import styled from "styled-components";

interface HeaderStyleProps {
  menuAtivo?: boolean
}

export const HeaderStyle = styled.header<HeaderStyleProps>`
  #menu {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    height: 100vh;
    background-color: #fff;
    -webkit-transition: 0.5s transform;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 99;

    .container-codie {
      position: relative;
      height: inherit;
      display: flex;
      align-items: center;
    }

    .fechar {
      position: absolute;
      top: 15px;
      left: 15px;
      cursor: pointer;
      display: none;

      svg {
        fill: var(--primary-color);
        -webkit-transition: 0.22s;
        width: 4vh;
        height: 4vh;
      }
    }

    ul {
      li {
        margin-bottom: 2.3vh;

        a {
          color: var(--primary-color);
          font-family: Objective;
          font-size: 5.16vh;
          font-weight: 700;
        }

        a:hover {
          color: #111;
        }
      }

      li:last-child {
        margin-bottom: 0;
      }
    }
  }

  #menu.active {
    transform: translateX(0);
    z-index: 5;
    -webkit-transition: 0.5s transform;
  }
  

  .logo-fixed {
    position: fixed;
    left: 0;
    right: 0;
}

.logo-fixed, .left-controls, .right-controls {
    position: fixed;
    top: 80px;
    z-index: 100;
}

.left-controls, .right-controls {
    width: 10vw;
    height: calc(100vh - 160px);
}

.left-controls {
    left: 0;

    .telefone {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) rotate(-180deg);
        left: 0;
        right: 0;
        width: 22px;
        margin: 0 auto;
        color: ${props => props.menuAtivo ? 'var(--primary-color)' : '#fff'};
        writing-mode: vertical-rl;
        white-space: nowrap;
        -webkit-transition: 0.7s ease-out;
    }

    .telefone::after {
        content: "";
        width: 2px;
        height: 0;
        position: absolute;
        left: -7px;
        top: 0;
        background-color: ${props => props.menuAtivo ? 'var(--primary-color)' : '#fff'};
        -webkit-transition: 0.3s;
    }

    .telefone:hover::after {
        transition: 0.3s;
        height: 100%;
    }
}

.block-bar {
    display: block;
    width: 40px;
    margin: 0 auto;
    cursor: pointer;

    div {
        width: 100%;
        height: 3px;
        background-color: ${props => props.menuAtivo ? 'var(--primary-color)' : '#fff'};
        margin-bottom: 5px;
    }

    div:last-child {
        width: 60%;
        margin: 0 0 0 auto;
    }
}

.right-controls {
    right: 0;

    .midias {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) rotate(360deg);
        left: 0;
        right: 0;
        width: 20px;
        margin: 0 auto;
        color: #f7f7f7;
        writing-mode: vertical-rl;
        white-space: nowrap;

        a {
            color: ${props => props.menuAtivo ? 'var(--primary-color)' : '#fff'};
            font-family: Objective;
            display: inline-block;
            margin-bottom: 45px;
            line-height: 18px;
            width: 14px;
            -webkit-transition: 1s ease-out;
            position: relative;
            text-transform: lowercase;
        }

        a::after {
            content: "";
            width: 2px;
            height: 0;
            position: absolute;
            left: -11px;
            top: 0;
            background-color: ${props => props.menuAtivo ? 'var(--primary-color)' : '#fff'};
            -webkit-transition: 0.3s;
        }

        a:hover::after {
            transition: 0.3s;
            height: 100%;
        }

        a:last-child {
            margin-bottom: 0;
        }
    }

    .icon-whatsapp {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
}
`;
