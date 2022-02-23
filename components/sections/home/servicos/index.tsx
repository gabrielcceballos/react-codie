import { ServicosCard } from "./serviceCard"

interface ServiceCard {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    link: string;
}

interface ServicesProps {
    listServices: ServiceCard[]
}

export function ServicesComponent({listServices}: ServicesProps) {
    return (
        <div>
            {
                listServices.map(service => {
                    return (
                        <ServicosCard
                        title={service.title}
                        subTitle={service.subTitle}
                        description={service.description}
                        image={service.image}
                        link={service.link}
                        />
                    )
                })
            }
        </div>
    )
}