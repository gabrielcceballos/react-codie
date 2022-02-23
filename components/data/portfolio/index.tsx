import { PortfolioCard } from "./cardPortfolio";
import { Swiper, SwiperSlide } from "swiper/react";

interface Portfolio {
    title: string;
    status: string;
    category: string;
    type: string;
    color: string;
    imagem: string;
    url: string;
    categoryUrl: string;
    description: string;
    gallery: string[]
}

interface PortfolioProps {
  listPortfolio: ({
    url: string;
    categoryUrl: string;
    title: string;
    status: string;
    category: string;
    type: string;
    color: string;
    imagem: string;
    description: string;
    gallery: string[];
} | undefined)[];
}

export function PortfolioComponent({ listPortfolio }: PortfolioProps) {
  if(!listPortfolio) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        effect={"fade"}
        autoplay={true}
        speed={3500}
        navigation={true}
      >
        {listPortfolio.map((portfolio) => {
          return (
            <SwiperSlide key={`banner-${portfolio?.url}`}>
              <PortfolioCard
                title={portfolio?.title}
                status={portfolio?.status}
                category={portfolio?.category}
                type={portfolio?.type}
                color={portfolio?.color}
                imagem={portfolio?.imagem}
                categoryUrl={portfolio?.categoryUrl}
                url={portfolio?.url}
                description={portfolio?.description}
                gallery={portfolio?.gallery}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
