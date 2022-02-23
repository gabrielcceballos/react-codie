import { Layout } from "components/layout/layout";
import { useRouter } from "next/router";
import { PortfolioList } from "pages";
import { ClienteStyle } from "./styles";

export default function ClientePage() {
  const { query } = useRouter();

  const PortData = PortfolioList.find(
    (portfolio) => portfolio?.url === query.url
  );

  function RetonaCorDoTexto(): string {
    const color = PortData?.color.substring(1);

    if (color) {
      const rgb = parseInt(color, 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;

      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      console.log(luma < 40);

      if (luma < 40) {
        return "#fff";
      }

      return "#000";
    }

    return "#000";
  }

  return (
    <Layout>
      <ClienteStyle
        backgroundColor={PortData?.color}
        color={RetonaCorDoTexto()}
      >
        <section id="banner-cliente">
          <div className="container-codie container-fluid">
            <div className="row">
              <div className="texto col-md-5">
                <p className="size30">/portfólio_</p>
                <h2 className="title">{PortData?.title}</h2>
                <div className="infos">
                  <span className="status">{PortData?.status}</span>
                  <span className="categoria">{PortData?.type}</span>
                  <span className="categoria">{PortData?.category}</span>
                </div>

                <div className="scroll">
                  <a href="#sobre-cliente">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="39"
                      viewBox="0 0 29 39"
                    >
                      <g id="Mouse" transform="translate(-359 -783)">
                        <g
                          id="Retângulo_12"
                          data-name="Retângulo 12"
                          transform="translate(359 783)"
                          fill="none"
                          stroke="#eee"
                          stroke-width="2"
                        >
                          <rect
                            width="29"
                            height="39"
                            rx="14.5"
                            stroke="none"
                          />
                          <rect
                            x="1"
                            y="1"
                            width="27"
                            height="37"
                            rx="13.5"
                            fill="none"
                          />
                        </g>
                        <line
                          id="Linha_15"
                          data-name="Linha 15"
                          y2="8"
                          transform="translate(373.5 793.5)"
                          fill="none"
                          stroke="#eee"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                    <span className="size20">scroll para baixo</span>
                  </a>
                </div>
              </div>

              <div className="image col-md-7">
                <img src={PortData?.imagem} />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-cliente">
          <div className="container-codie">
            <p className="size16">{PortData?.description}</p>
          </div>
        </section>

        {PortData?.gallery && (
          <section id="imagens-clientes">
            <div className="container-codie container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <img src={PortData?.gallery[0]} />
                </div>
              </div>

              <div className="row">
                {PortData?.gallery[1] && (
                  <div className="col-md-6">
                    <img src={PortData?.gallery[1]} />
                  </div>
                )}

                {PortData?.gallery[2] && (
                  <div className="col-md-6">
                    <img src={PortData?.gallery[2]} />
                  </div>
                )}
              </div>

              {PortData?.gallery[3] && (
                <div className="row">
                  <div className="col-md-12">
                    <img src={PortData?.gallery[3]} />
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        <section id="contato" className="bg-transparent">
          <div className="container-codie">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title-section white">entre em contato</h2>

                <div className="opcoes">
                  <ol>
                    <li className="size16 white">Quero desenvolver Um site_</li>
                    <li className="size16 white">
                      Quero aumentar Minhas vendas Com google adwords_
                    </li>
                    <li className="size16 white">
                      preciso de Ajuda nas minhas Redes sociais_
                    </li>
                    <li className="size16 white">
                      preciso falar Com o suporte_
                    </li>
                    <li className="size16 white">Quero trabalhar Na codie_</li>
                  </ol>
                </div>
              </div>

              <div className="col-md-6">
                <form action="/" method="post">
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    value=""
                    placeholder="Nome"
                    required
                  />

                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value=""
                      placeholder="E-mail"
                      required
                    />
                  </div>

                  <div>
                    <input
                      id="telefone"
                      className="phone-mask"
                      type="tel"
                      name="telefone"
                      value=""
                      placeholder="Telefone"
                      required
                    />
                  </div>

                  <div className="size16">
                    <select name="select">
                      <option value="valor1">Valor 1</option>
                      <option value="valor2" selected>
                        Valor 2
                      </option>
                      <option value="valor3">Valor 3</option>
                    </select>
                  </div>

                  <div className="size16">
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value=""
                      placeholder="Mensagem"
                      required
                    ></textarea>
                  </div>

                  <div className="button">
                    <button className="bt white" type="submit">
                      <span>Enviar</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="51"
                        height="61"
                        viewBox="0 0 51 61"
                      >
                        <defs>
                          <clipPath id="ofjja">
                            <path
                              fill="#fff"
                              d="M1.5 30c0-12.703 10.297-23 23-23s23 10.297 23 23-10.297 23-23 23-23-10.297-23-23z"
                            />
                          </clipPath>
                        </defs>
                        <g>
                          <g>
                            <path
                              fill="none"
                              stroke="#fff"
                              stroke-miterlimit="20"
                              stroke-width="4"
                              d="M1.5 30c0-12.703 10.297-23 23-23s23 10.297 23 23-10.297 23-23 23-23-10.297-23-23z"
                              clip-path='url("#ofjja")'
                            />
                          </g>
                          <g transform="rotate(45 25.5 30.5)">
                            <path
                              fill="none"
                              stroke="#fff"
                              stroke-miterlimit="20"
                              stroke-width="2"
                              d="M13.267 22.944v0H27.66v14.392"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ClienteStyle>
    </Layout>
  );
}
