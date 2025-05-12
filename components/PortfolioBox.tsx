import Image from "next/image"
import Link from "next/link";
interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
    }
}
function PortfolioBox(props: PortfolioBoxProps) {
    const {data} = props;
    const {id, title, image, urlGithub}= data;
    return (
        <div className="p-4 border border-gray-600 rounded-xl ">
            <h3 className="mb-5 text-xl">
                {title}
            </h3>
            <Image src={image} alt="Image Product" width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto" />
            <div className="flex gap-5 mt-5 justify-center">
                <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-blue-600 border border-blue-600 hover:bg-blue-600/80">
                    Github   
                </Link>

            </div>
        </div>
    );
}
export default PortfolioBox;    