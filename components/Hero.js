import Image from "next/image";

function Hero() {
    return (
        <div className="relative flex items-center justify-center h-[42vw]">
            <Image
                src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center bottom"
            />
            <div className="relative text-center">
                <h1 className="sm:text-xl lg:text-3xl font-bold">Not sure where to go? Perfect.</h1>
                <button className="button text-purple-700 bg-white font-bold">I'm flexible</button>
            </div>
        </div>
    );
}

export default Hero;
