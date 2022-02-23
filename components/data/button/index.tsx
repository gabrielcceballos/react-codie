
import { ButtonStyle } from './styles'

interface ButtonProps {
    href: string;
    text?: string;
}

export function ButtonComponent({ href, text }: ButtonProps) {
  return (
    <ButtonStyle href={href}>
      {text ? text : 'ver'}
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="60"
        viewBox="0 0 59 60"
      >
        <defs>
          <clipPath>
            <path d="M6 29C6 16.297 16.297 6 29 6s23 10.297 23 23-10.297 23-23 23S6 41.703 6 29z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <path
              fill="none"
              stroke-miterlimit="20"
              stroke-width="4"
              d="M6 29C6 16.297 16.297 6 29 6s23 10.297 23 23-10.297 23-23 23S6 41.703 6 29z"
              clip-path='url("#ohn9a")'
            />
          </g>
          <g>
            <g>
              <path
                fill="none"
                stroke-miterlimit="20"
                stroke-width="2"
                d="M29.5 20.09v19"
              />
            </g>
            <g transform="rotate(90 29.5 29.5)">
              <path
                fill="none"
                stroke-miterlimit="20"
                stroke-width="2"
                d="M29.5 39.09v-19"
              />
            </g>
          </g>
        </g>
      </svg>
    </ButtonStyle>
  );
}
