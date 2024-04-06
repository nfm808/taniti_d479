import Image from "next/image";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Hero from "../../../public/gray-box.png";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Faq from "../component/Faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-black">
            Introducing
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {`The Food Landscape: A Glimpse Into Taniti's Culinary Diversity`}
          </h1>
          <p className="mt-6 text-xl leading-8">
            Ever been intrigued by the culinary offerings of a small tropical
            island? Taniti, with its varied terrain and indigenous population of
            about 20,000, is making waves in the gastronomic scene.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              {`Taniti has a fascinating range of geographical features, from
              sandy and rocky beaches to lush rainforests, and even a small
              active volcano. But look beyond the natural beauty, and you'll
              find another captivating aspect: the local cuisine. Despite being
              relatively isolated until recent years due to limited tourism,
              Taniti has developed a food landscape that's as diverse as its
              topography.`}
            </p>

            <p className="mt-8">
              This Pacific gem might not be expansive – less than 500 square
              miles in area - but it boasts an impressive roster of restaurants
              that cater to different tastes.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              American Influence: Familiar Flavors on Exotic Shores
            </h2>
            <p className="mt-6">
              {` But what if you're longing for something more familiar? Fret not.
              Amidst the seafood-centric options are three American-style
              restaurants ready to serve up classic favorites with an island
              spin. Whether it's burgers or fries you're craving or maybe
              something sweeter like pancakes or apple pie - these places have
              got you covered.`}
            </p>

            <p className="mt-10">
              As tourism continues to increase on Taniti, these American-style
              outlets offer comfort food for those missing home while
              simultaneously providing locals with new culinary experiences—thus
              contributing to the enrichment of the overall food culture on the
              island.
            </p>
          </div>
          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src={Hero.src}
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              Faucibus commodo massa rhoncus, volutpat.
            </figcaption>
          </figure>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Asian Inspiration: Fusion Flavours at Play
            </h2>
            <p className="mt-6">
              In addition to local seafood fares and comforting American dishes,
              two Pan-Asian eateries complete Taniti’s diverse culinary scene.
              These restaurants blend Oriental cooking techniques with local
              ingredients, creating a fusion of flavors that delight both local
              diners and tourists.
            </p>
            <p className="mt-8">
              {` So whether you're an adventurous eater ready to try the catch of
              the day prepared in traditional Tanitian style, or prefer comfort
              food reminiscent of home, Taniti's restaurant scene has something
              for everyone. Or perhaps it's the exotic allure of Pan-Asian
              cuisine that excites your taste buds? On this small Pacific
              island, variety isn't just limited to its natural landscapes—it
              extends right onto your plate too.`}
            </p>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </main>
  );
}
