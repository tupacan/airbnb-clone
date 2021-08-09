import Image from "next/image";

function SmallCard({ img, location, distance }) {
    return (
        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 transition-all duration-100 p-2">
            <Image className="rounded-xl" src={img} width="65" height="65" objectFit="cover" />
            <div className="">
                <h2 className="font-medium">{location}</h2>
                <h3 className="text-gray-500">
                    {distance} {distance === "1" ? "hour" : "hours"} drive
                </h3>
            </div>
        </div>
    );
}

export default SmallCard;
