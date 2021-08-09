import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative text-white h-72 lg:h-96 p-5 lg:p-16 cursor-pointer">
            <Image
                className="rounded-2xl pointer-events-none"
                src={img}
                layout="fill"
                objectFit="cover"
            />
            <div className="relative space-y-5 max-w-xs">
                <h2 className="sub-heading text-3xl">{title}</h2>
                <p className="text-lg leading-snug">{description}</p>
                <button className="button rounded-lg py-2 px-5 text-black">{buttonText}</button>
            </div>
        </section>
    );
}

export default LargeCard;
