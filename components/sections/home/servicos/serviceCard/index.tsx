import { ButtonComponent } from "components/data/button";
import { ServicosStyle } from "./styles";

interface ServicosProps {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    link: string;
}

export function ServicosCard({ title, subTitle, description, image, link }: ServicosProps) {
    return (
        <ServicosStyle >
            <div className="bg" style={{backgroundImage: `url(${image})`}}>
            <div className="container-codie">
                <div className="titulo">
                    <span className="size30">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>

                <div className="info">
                    <p className="size18">{description}</p>
                </div>

               <ButtonComponent href={link} /> 
            </div>
        </div>
    </ServicosStyle>

    )
}