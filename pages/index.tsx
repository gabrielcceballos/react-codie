import { Layout } from "components/layout/layout";

import { BannerComponent } from "components/data/banner";
import { ServicesComponent } from "components/sections/home/servicos";
import { PortfolioComponent } from "components/data/portfolio";
import { CarouselClientes } from "components/sections/home/clientsCarousel";

export const PortfolioList = [
  {
    url: "ecofood",
    categoryUrl: "site",
    title: "ECOFOOD",
    status: "NO AR",
    category: "/ux ui_",
    type: "/programação_",
    color: "#ffc300",
    imagem: "/images/ecofood/principal-ecofood.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    gallery: [
      "/images/ecofood/image1.jpg",
      "/images/ecofood/image2.jpg",
      "/images/ecofood/image3.png",
      "/images/ecofood/image4.jpg",
    ],
  },
  ,
  {
    url: "codigo-da-carne",
    categoryUrl: "martketing",
    title: "CÓDIGO DA CARNE",
    status: "NO AR",
    category: "/ux ui_ ",
    type: "/programação_",
    color: "#200d0d",
    imagem: "/images/codigocarne/principal-codigo.png",
    description: "descricao da codigo da carne",
    gallery: ["/images/codigocarne/principal-codigo.png"],
  },
];

export default function HomePage() {
  const CarouselBanner = [
    "images/geral/banner-home-3.jpg",
    "images/geral/banner-home-4.jpg",
    "images/geral/banner-home-5.jpg",
    "images/geral/banner-home-6.jpg",
    "images/geral/banner-home-7.jpg",
    "images/geral/banner-home.jpg",
  ];

  const ServicesList = [
    {
      title: "UX/UI",
      subTitle: "/criação de sites_",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "images/geral/home-sites.jpg",
      link: "/sites",
    },
    {
      title: "UX/UI",
      subTitle: "/criação de sites_",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "images/geral/home-sites.jpg",
      link: "/sites",
    },

    {
      title: "UX/UI",
      subTitle: "/criação de sites_",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "images/geral/home-sites.jpg",
      link: "/sites",
    },
  ];

  const ListaClientes = [
    [
      {
        image: "/images/logoclientes/logo1.png",
        link: " ",
      },
      {
        image: "/images/logoclientes/logo2.png",
        link: " ",
      },

      {
        image: "/images/logoclientes/logo3.png",
        link: " ",
      },

      {
        image: "/images/logoclientes/logo4.png",
        link: " ",
      },
    ],
    [
      {
        image: "/images/logoclientes/logo1.png",
        link: " ",
      },
      {
        image: "/images/logoclientes/logo2.png",
        link: " ",
      },

      {
        image: "/images/logoclientes/logo3.png",
        link: " ",
      },

      {
        image: "/images/logoclientes/logo4.png",
        link: " ",
      },
      {
        image: "/images/logoclientes/logo4.png",
        link: " ",
      },
      {
        image: "/images/logoclientes/logo4.png",
        link: " ",
      },
      {
        image: "/images/logoclientes/logo4.png",
        link: " ",
      },
         {
        image: "/images/logoclientes/logo4.png",
        link: " ",
      },
    ],
  ];

  return (
    <Layout>
      <BannerComponent
        image="images/geral/"
        subTitle="/um novo_"
        title="momento codie"
        carousel={true}
        animationTitle={true}
        carouselImages={CarouselBanner}
      />

      <ServicesComponent listServices={ServicesList} />

      <PortfolioComponent listPortfolio={PortfolioList} />

      <CarouselClientes listImages={ListaClientes} />
    </Layout>
  );
}
