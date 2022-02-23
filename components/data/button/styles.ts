import styled from "styled-components";

export const ButtonStyle = styled.a`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: #fff;

  svg {
    fill: #fff;
    stroke: #fff;
  }

  &:hover {
    color: #0000ef;

    svg {
      fill: #0000ef;
      stroke: #0000ef;
    }
  }
`;
