import { useState } from 'react'
import { HeaderStyle } from "./styles";

export function HeaderComponent() {

  const [menu, setMenu] = useState(false);

  const menuItems = [
    {
      link: '/',
      name: '/início',
    },
    {
      link: '/sobre',
      name: '/sobre nós',
    },
    {
      link: '/sites',
      name: '/sites',
    },
    {
      link: '/marketing',
      name: '/marketing',
    },
    {
      link: '/design',
      name: '/design',
    },
    {
      link: '/portfólio',
      name: '/portfólio',
    },
    {
      link: '/blog',
      name: '/blog',
    },
    {
      link: '/contato',
      name: '/contato',
    },
  ]


  return (
    <HeaderStyle menuAtivo={menu}>
      <div id="menu" className={`${menu ? 'active' : ''}`}>
        <div className="container-codie">
          <div className="fechar">
            <svg
              id="fechar-menu-mobile"
              enableBackground="new 0 0 512.001 512.001"
              height="512"
              viewBox="0 0 512.001 512.001"
              width="512"
            >
              <g>
                <path d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"></path>
              </g>
            </svg>
          </div>

          <ul>
            {
              menuItems.map(({ link , name }, index) => {
                return (
                  <li key={`link-menu-${index}`}>
                    <a href={link} onClick={() => setMenu(!menu)}>{name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="left-controls">
        <div className="block-bar" onClick={() => setMenu(!menu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <a
          href="https://api.whatsapp.com/send?l=pt_BR&phone=554396463608"
          target="_blank"
          rel="noreferrer"
          className="telefone font-size-18 medium "
        >
          (43) 99646-3608
        </a>
      </div>

      <div className="container-codie logo-fixed">
        <a href="#banner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="27"
            viewBox="0 0 88 27"
          >
            <g>
              <g>
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M66.187.363a2.213 2.213 0 1 1 2.092 3.901 2.213 2.213 0 0 1-2.092-3.9z"
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M68.63 6.312h-2.643a.881.881 0 0 0-.88.881v18.36c0 .485.396.882.88.882l2.641-.001a.882.882 0 0 0 .881-.88V7.191a.882.882 0 0 0-.88-.88"
                      />
                    </g>
                  </g>
                </g>
                <g>
                  <path
                    fill="#fff"
                    d="M37.913 10.001c.02.056.034.113.053.17.023.054.048.108.068.164 1.682 4.654-.773 9.825-5.472 11.52-4.7 1.7-9.892-.706-11.574-5.362-.02-.056-.034-.114-.053-.17h-.002c-.02-.055-.045-.107-.066-.164-1.682-4.655.773-9.825 5.472-11.522 4.7-1.698 9.892.707 11.574 5.364zm-20.924 7.56c.02.056.046.11.067.163l-.002.001c.02.058.035.113.055.17 2.452 6.784 9.992 10.278 16.841 7.804 6.85-2.476 10.413-9.982 7.962-16.765-.02-.057-.046-.11-.068-.165l.004-.002c-.02-.056-.037-.112-.057-.167C39.339 1.815 31.799-1.68 24.95.796c-6.85 2.474-10.413 9.98-7.962 16.764z"
                  />
                </g>
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M85.815 11.047a2.213 2.213 0 1 1-.055 4.424 2.213 2.213 0 0 1 .055-4.424z"
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M86.895 22.443c-4.954-.05-8.97-4.093-8.97-9.058s4.016-9.007 8.97-9.058V.203c-7.239.05-13.094 5.931-13.094 13.182 0 7.25 5.855 13.133 13.094 13.184z"
                      />
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M13.093 22.443c-4.954-.05-8.97-4.093-8.97-9.058s4.016-9.007 8.97-9.058V.203C5.854.253 0 6.134 0 13.385c0 7.25 5.854 13.133 13.093 13.184z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M46.92 22.303c4.954-.049 8.97-4.092 8.97-9.057 0-4.964-4.016-9.006-8.97-9.057V.063c7.238.051 13.094 5.933 13.094 13.183 0 7.252-5.856 13.134-13.093 13.185z"
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      fill="#fff"
                      d="M46.92 10.55v4.497a2.25 2.25 0 0 0 0-4.497z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>

      <div className="right-controls">
        <div className="midias">
          <a
            href="https://www.facebook.com/codie.digital/"
            target="_blank"
            rel="external"
            className="font-size-18 medium"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/codie.digital/?hl=pt-br"
            target="_blank"
            rel="external"
            className="font-size-18 medium"
          >
            instagram
          </a>
        </div>
      </div>
    </HeaderStyle>
  );
}
