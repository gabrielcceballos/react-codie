import { FooterStyle } from "./styles";

interface FooterProps {
    backgroundColorFooter: string;
}


export function FooterComponent({backgroundColorFooter}: FooterProps) {
  return (
    <FooterStyle backgroundColorFooter={backgroundColorFooter}>
      <div className="container-codie">
        <div className="container-flex container-fluid">
          <div className="tablet">
            <div className="menu institucional">
              <h3 className="size16">institucional</h3>
              <ol>
                <li>
                  <a className="size16 link-menu" href="">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="size16 link-menu" href="">
                    SOBRE NÓS
                  </a>
                </li>
                <li>
                  <a className="size16 link-menu" href="">
                    PORTFÓLIO
                  </a>
                </li>
                <li>
                  <a className="size16 link-menu" href="">
                    CRIAÇÃO DE SITES
                  </a>
                </li>
                <li>
                  <a className="size16 link-menu" href="">
                    mARKETING DIGITAL
                  </a>
                </li>
                <li>
                  <a className="size16 link-menu" href="">
                    CONTATO
                  </a>
                </li>
              </ol>
            </div>

            <div className="menu servicos">
              <h3 className="size16">serviços</h3>
              <ol>
                <li>
                  <a className="size16 link-menu" href="">
                    sites
                  </a>
                </li>
                <li>
                  <a className="size16 link-menu" href="">
                    marketing digital
                  </a>
                </li>
              </ol>
            </div>
          </div>

          <div className="tablet">
            <div className="menu redes">
              <h3 className="size16">redes sociais</h3>
              <ol>
                <li>
                  <a className="size16" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <g>
                          <path
                            fill="#eee"
                            d="M14.49 4.82a3.31 3.31 0 0 0-3.31-3.31H4.82a3.31 3.31 0 0 0-3.31 3.31v6.36a3.31 3.31 0 0 0 3.31 3.31h6.36a3.31 3.31 0 0 0 3.31-3.31zM16 11.18A4.819 4.819 0 0 1 11.18 16H4.82A4.82 4.82 0 0 1 0 11.18V4.82A4.82 4.82 0 0 1 4.82 0h6.36A4.82 4.82 0 0 1 16 4.82zM10.56 8.104a2.534 2.534 0 0 0-2.532-2.53 2.534 2.534 0 0 0-2.53 2.53 2.534 2.534 0 0 0 2.53 2.531 2.534 2.534 0 0 0 2.532-2.53zm1.42 0a3.956 3.956 0 0 1-3.952 3.951 3.956 3.956 0 0 1-3.951-3.95 3.956 3.956 0 0 1 3.951-3.952 3.956 3.956 0 0 1 3.952 3.951zm1.171-4.217a.94.94 0 1 1-1.881 0 .94.94 0 0 1 1.881 0z"
                          />
                        </g>
                      </g>
                    </svg>
                    @codie.DIGITAL
                  </a>
                </li>

                <li>
                  <a className="size16" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 10 16"
                    >
                      <g>
                        <g>
                          <path
                            fill="#fff"
                            d="M8.723 9l.445-2.896H6.389V4.225c0-.792.388-1.564 1.633-1.564h1.263V.196S8.139 0 7.043 0C4.754 0 3.259 1.387 3.259 3.897v2.207H.715V9H3.26v7h3.13V9z"
                          />
                        </g>
                      </g>
                    </svg>
                    FACEBOOK/CODIE.DIGITAL
                  </a>
                </li>

                <li>
                  <a className="size16" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <g>
                          <path
                            fill="#fff"
                            d="M15.997 16h-3.31v-5.2c0-1.24-.025-2.829-1.725-2.829-1.725 0-1.989 1.346-1.989 2.74V16H5.66V5.317h3.182v1.458h.046c.443-.84 1.525-1.726 3.139-1.726C15.383 5.05 16 7.26 16 10.132V16zM1.92 3.86C.861 3.86 0 2.982 0 1.92a1.921 1.921 0 1 1 3.842 0c0 1.062-.86 1.94-1.92 1.94zM3.581 16H.265V5.317h3.318z"
                          />
                        </g>
                      </g>
                    </svg>
                    @CODIE.SOLUTIONS
                  </a>
                </li>
              </ol>
            </div>

            <div className="menu contato">
              <h3 className="size16">contato</h3>
              <ol>
                <li>
                  <a className="size16" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  fill="#eee"
                                  d="M8 14.603a6.6 6.6 0 0 1-3.325-.899.696.696 0 0 0-.537-.07l-2.188.6.763-1.678a.7.7 0 0 0-.07-.698A6.552 6.552 0 0 1 1.397 8 6.61 6.61 0 0 1 8 1.398 6.61 6.61 0 0 1 14.603 8 6.61 6.61 0 0 1 8 14.603zM8 0C3.589 0 0 3.59 0 8a7.94 7.94 0 0 0 1.278 4.336L.063 15.013a.698.698 0 0 0 .82.963l3.349-.92A7.996 7.996 0 0 0 8 16c4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  fill="#eee"
                                  d="M11.08 9.2c-.336-.2-.773-.425-1.168-.263-.303.124-.496.598-.693.841-.1.124-.22.144-.376.082-1.138-.454-2.01-1.214-2.638-2.26-.107-.163-.088-.292.04-.443.19-.223.429-.477.48-.778.051-.3-.09-.652-.214-.92-.16-.343-.337-.832-.68-1.025-.316-.179-.731-.079-1.012.15-.485.395-.72 1.014-.712 1.627.002.174.023.349.064.517.098.405.285.782.495 1.141.159.271.331.534.517.787a7.988 7.988 0 0 0 2.244 2.083c.438.268.91.503 1.399.665.547.181 1.036.37 1.628.257.62-.118 1.23-.501 1.476-1.099a.95.95 0 0 0 .069-.56c-.085-.386-.607-.615-.92-.802z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    (43) 99646-3608
                  </a>
                </li>

                <li>
                  <a className="size16" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              fill="#eee"
                              d="M15.557 1.778L8.943 7.7 2.232 1.778zM16 14.222H1.778V3.748l7.175 6.33L16 3.768zM0 .89V15.11c0 .491.398.889.889.889h16c.49 0 .889-.398.889-.889V.89a.889.889 0 0 0-.89-.889h-16A.889.889 0 0 0 0 .889z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    CONTATO@CODIE.COM.BR
                  </a>
                </li>

                <li>
                  <a className="size16" href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <g>
                        <g>
                          <g />
                          <g>
                            <path
                              fill="#eee"
                              d="M10 11.83a3.64 3.64 0 1 1 0-7.28 3.64 3.64 0 0 1 0 7.28zm0-1.82a1.82 1.82 0 1 0 0-3.64 1.82 1.82 0 0 0 0 3.64zm0 9.763l-5.792-5.791a8.19 8.19 0 1 1 11.584 0zm0-2.573l4.505-4.505a6.37 6.37 0 1 0-9.01 0z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    Av. Duque de Caxias, 1726 <br />
                    Sala 707 - Vila Brasil, Londrina-PR
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="politicas">
            <a href="" className="size14">
              POLÍTICAS DE PRIVACIDADE
            </a>
            <a href="" className="size14">
              TERMOS DE USO
            </a>
          </div>
          <div className="logo-codie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="16"
              viewBox="0 0 52 16"
            >
              <g>
                <g>
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M39.064.262a1.303 1.303 0 1 1 1.232 2.296A1.303 1.303 0 0 1 39.064.262z"
                      />
                    </g>
                    <g>
                      <g>
                        <path
                          fill="#fff"
                          d="M40.502 3.764h-1.556a.519.519 0 0 0-.518.52v10.81a.52.52 0 0 0 .518.519l1.555-.001a.52.52 0 0 0 .519-.518V4.282a.52.52 0 0 0-.518-.518"
                        />
                      </g>
                    </g>
                  </g>
                  <g>
                    <path
                      fill="#fff"
                      d="M22.416 5.936c.012.034.02.067.031.1.014.032.028.064.04.097.99 2.74-.455 5.785-3.222 6.783-2.767 1.001-5.824-.416-6.815-3.157-.012-.033-.02-.067-.03-.1h-.002c-.012-.033-.027-.063-.038-.097-.991-2.741.454-5.785 3.221-6.784 2.768-1 5.825.416 6.815 3.158zm-12.32 4.451c.012.034.027.065.039.097h-.001c.011.034.02.067.032.1 1.445 3.995 5.884 6.052 9.917 4.595 4.032-1.458 6.13-5.877 4.687-9.871-.012-.033-.027-.065-.04-.097h.003l-.034-.1C23.256 1.116 18.816-.94 14.784.516c-4.033 1.457-6.131 5.876-4.688 9.871z"
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M50.62 6.552a1.302 1.302 0 1 1-.032 2.605 1.302 1.302 0 0 1 .033-2.605z"
                      />
                    </g>
                    <g>
                      <g>
                        <path
                          fill="#fff"
                          d="M51.257 13.262a5.34 5.34 0 0 1-5.282-5.333 5.34 5.34 0 0 1 5.282-5.333V.167a7.763 7.763 0 0 0 0 15.524z"
                        />
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        fill="#fff"
                        d="M7.802 13.262A5.34 5.34 0 0 1 2.52 7.929a5.34 5.34 0 0 1 5.282-5.333V.167a7.762 7.762 0 0 0 0 15.524z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <path
                          fill="#fff"
                          d="M27.72 13.18A5.34 5.34 0 0 0 33 7.847a5.34 5.34 0 0 0-5.281-5.333V.085a7.764 7.764 0 0 1 7.709 7.762 7.764 7.764 0 0 1-7.71 7.763z"
                        />
                      </g>
                    </g>
                    <g>
                      <path
                        fill="#fff"
                        d="M27.72 6.26v2.647a1.326 1.326 0 0 0 0-2.647z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
