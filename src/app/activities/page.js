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
            {`Thrilling Experiences Aplenty`}
          </h1>
          <p className="mt-6 text-xl leading-8">
            Ever been intrigued by the culinary offerings of a small tropical
            island? Taniti, with its varied terrain and indigenous population of
            about 20,000, is making waves in the gastronomic scene.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              {`Taniti offers no shortage of entertainment for tourists seeking fun-filled escapades or peaceful retreats. Of course, the local beaches are a great place to start - the perfect spots for sunbathing or building sandcastles. For the more adventurous souls out there, how does exploring dense rainforests or scaling an active volcano sound? `}
            </p>

            <p className="mt-8">
              {`But the allure doesn't stop at nature's doorstep. Merriton Landing
              - a rapidly expanding area on Yellow Leaf Bay's northern side - is
              brimming with all kinds of amusement opportunities. From immersing
              oneself in local history at museums to enjoying vibrant nightlife
              in pubs and dance clubs – there’s truly something for everyone.`}
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Uncover Hidden Gems on Taniti Island
            </h2>
            <p className="mt-6">
              {`For those who enjoy soaking up local culture and history while sightseeing, Taniti City delivers just that – with its native architecture blending seamlessly into white sandy beaches surrounding Yellow Leaf Bay.`}
            </p>

            <p className="mt-10">
              {`Apart from lounging by these pristine shores, visitors can choose
              between boat rides offering panoramic views of this beautiful
              island or bus tours that provide a more up-close and personal
              experience of the diverse terrain. The adventurous can explore
              deeper into the island by embarking on rainforest hikes, where
              it's possible to witness some truly stunning flora and fauna.`}
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
            <p className="mt-6">
              {`And if you're captivated by natural wonders, why not visit
              Taniti’s very own active volcano? It's an awe-inspiring sight that
              promises to create indelible memories.`}
            </p>
            <p className="mt-8">
              {`Taniti Island is indeed a paradise waiting to be explored – come along for the ride!`}
            </p>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </main>
  );
}
