import { ButtonComponent } from "components/data/button";
import { PortfolioStyle } from "./styles";
import Link from "next/link";

interface Portfolio {
  title?: string;
  status?: string;
  category?: string;
  type?: string;
  color?: string;
  imagem?: string;
  url?: string;
  categoryUrl?: string;
  description?: string;
  gallery?: string[]
}

export function PortfolioCard({
  title,
  status,
  category,
  type,
  color,
  imagem,
  url,
  categoryUrl,
  gallery,
  description
}: Portfolio) {
  return (
    <PortfolioStyle style={{ backgroundColor: color }}>
      <div className="container-fluid">
        <div className="row">
          <div className="texto col-md-6">
            <p className="title-section">Portfolio</p>
            <h2 className="title">{title}</h2>
            <div className="infos">
              <span className="status">{status}</span>
              <span className="categoria">{category}</span>
              <span className="categoria">{type}</span>

              <div className="botao">
                <Link
                  href={{
                    pathname: `cliente/${url}`,
                    query: { categoryUrl , url },
                  }}
                  passHref
                >
                  <ButtonComponent href="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="image col-md-6">
            <img src={imagem} />
          </div>
        </div>
      </div>
    </PortfolioStyle>
  );
}
