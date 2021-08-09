import Image from "next/image";

function MediumCard({ img, title }) {
    return (
        <div className="cursor-pointer m-2 space-y-1 lg:w-full">
            <div className="relative h-60 w-60 lg:w-full lg:h-auto lg:pb-[100%] hover:scale-105 transition-transform ease-out duration-100">
                <Image className="rounded-xl" src={img} layout="fill" objectFit="cover" />
            </div>
            <h3 className="font-medium text-xl">{title}</h3>
        </div>
    );
}

export default MediumCard;
