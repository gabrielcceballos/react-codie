import { ClientsCarouselStyles } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

interface images {
  image: string;
  link: string;
}

interface ClientesProps {
  listImages: images[][];
}

export function CarouselClientes({ listImages }: ClientesProps) {
  return (
    <ClientsCarouselStyles>
      <div className="container-codie">
        <h2 className="title-section">
          Nossos
          <br />
          clientes
        </h2>

        <div className="content-clientes">
          {listImages.map((images, index) => {
            return (
              <div className="container-infinite">
                <div className="infinite">
                  {images.map(({ link, image }) => {
                    return (
                      <a href={link} className="box-logo">
                        <img src={image} />
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ClientsCarouselStyles>
  );
}
