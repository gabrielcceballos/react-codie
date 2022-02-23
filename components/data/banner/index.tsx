import { useEffect } from 'react'
import { BannerStyle } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

interface BannerProps {
  image?: string;
  carousel?: boolean;
  carouselImages?: string[];
  title: string;
  subTitle: string;
  animationTitle?: boolean
}

export function BannerComponent({
  image,
  carousel,
  carouselImages,
  title,
  subTitle,
  animationTitle
}: BannerProps) {
  useEffect(() => {
      if(animationTitle) {
        const msg = title;
        let titulo = document.querySelector(".tituloAnimado");
    
        if(titulo !== null && titulo && document) {
        //titulo.innerHTML = msg;
    
        for (var i = 0; i < msg.length; i++) {
            (function (pos) {
              setTimeout(function () {
                (titulo as Element).innerHTML += msg.charAt(pos);
              }, 280 * pos);
            })(i);
          }
        }
      }

  }, [])


  return (
    <>
      <BannerStyle
        style={{
          backgroundImage: carouselImages
            ? "unset"
            : `url(images/${image}.jpg)`,
        }}
      >
        <div className="container-codie">
          <div className="flex-transparent-justify-between"></div>

          <div className="titulos typewriter">
            <span className="size40 subTitle">{subTitle}</span>
            <h1 className="title tituloAnimado">
                {
                    animationTitle ? '' : title
                }
            </h1>

            <div className="scroll">
              <a href="#sitehome">
                <div className="mouse">
                  <div className="scrollTop"></div>
                </div>
                <span className="size20">scroll para baixo</span>
              </a>
            </div>
          </div>

          <div className="menu-banner">
            <ul>
              <li>
                <a className="size20 link-menu" href="/sobre">
                  sobre nós
                </a>
              </li>
              <li>
                <a className="size20 link-menu" href="/sites">
                  sites
                </a>
              </li>
              <li>
                <a className="size20 link-menu" href="/marketing">
                  marketing
                </a>
              </li>
              <li>
                <a className="size20 link-menu" href="/design">
                  design
                </a>
              </li>
              <li>
                <a className="size20 link-menu" href="/portfolio">
                  portfólio
                </a>
              </li>
              <li>
                <a className="size20 link-menu" href="/blogs">
                  blog
                </a>
              </li>
              <li>
                <a className="size20 link-menu" href="/contato">
                  contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {carousel && (
          <div className="carousel">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              effect={"fade"}
              autoplay={true}
              speed={2500}
            >
              {carouselImages?.map((imagem, index) => {
                return (
                  <SwiperSlide key={`banner-${index}`}>
                    <img src={imagem} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </BannerStyle>
    </>
  );
}
