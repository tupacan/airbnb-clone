import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
    return (
        <div className="">
            <Head>
                <title>Aribnb</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Hero />

            <main className="p-4 pb-10 md:px-10 max-w-7xl mx-auto space-y-8">
                <section className="space-y-4">
                    <h2 className="sub-heading">Explore nearby</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                        {exploreData?.map(({ img, distance, location }, index) => (
                            <SmallCard
                                key={index}
                                img={img}
                                distance={distance}
                                location={location}
                            />
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="sub-heading">Live Anywhere</h2>

                    <div className="flex overflow-x-auto scrollbar-hide">
                        {cardsData?.map(({ img, title }, index) => (
                            <MediumCard key={index} img={img} title={title} />
                        ))}
                    </div>
                </section>

                <LargeCard
                    img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg"
                    title="Try hosting"
                    description="Earn extra income and unlock new opportunities by sharing your space."
                    buttonText="Learn more"
                />
            </main>

            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    const exploreData = await fetch("https://jsonkeeper.com/b/AM8L").then((res) => res.json());
    const cardsData = await fetch("https://jsonkeeper.com/b/VEUT").then((res) => res.json());

    return {
        props: {
            exploreData,
            cardsData,
        },
    };
}
