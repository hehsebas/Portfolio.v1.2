import Image from "next/image"

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
    }
}

function PortfolioBox(props: PortfolioBoxProps) {
    const {data} = props;
    const {title, image} = data;
    
    return (
        <div className="service-card">
            <div className="service-content">
                <h3 className="service-title">
                    {title}
                </h3>
            </div>
            <div className="service-icon-container relative">
                <Image 
                    src={image} 
                    alt={title}
                    fill
                    className="object-cover rounded-lg" 
                />
            </div>
        </div>
    );
}

export default PortfolioBox;