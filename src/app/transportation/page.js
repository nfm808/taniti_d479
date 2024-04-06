import Image from "next/image";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Hero from "../../../public/gray-box.png";
import Faq from "@/app/component/Faq";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

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
            {`Your Journey to Paradise`}
          </h1>
          <p className="mt-6 text-xl leading-8">
            Getting to Taniti is part of the excitement that builds up your
            vacation anticipation! Most visitors land here by air as the island
            features a quaint airport capable of handling small jets and
            propeller planes. A subtle charm lies in this seemingly limited
            accessibility – it somewhat preserves Taniti’s exclusivity away from
            mass tourism.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              {`Anticipating future growth in visitor numbers, the island is already planning to expand its airport to accommodate larger jets. Additionally, a small cruise ship graces Yellow Leaf Bay once a week – an alternative route for those who fancy a romantic sea voyage.`}
            </p>

            <p className="mt-8"></p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Exploring Taniti: Your Options
            </h2>
            <p className="mt-6">
              {`Once you've landed, how do you get around this tropical paradise? Interestingly, navigating Taniti is as fun as exploring it! Public buses are at your service in Taniti City from dawn until late night. To venture beyond the city limits, private bus services come into play.`}
            </p>

            <p className="mt-10">
              {`And if you prefer independence over scheduled routes, taxis can be
              hailed within Taniti City or cars can be rented near the airport.
              Adventurous souls might even opt for bikes available for rent
              throughout the island (don't forget your helmet though – safety
              first!).`}
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
              Taniti City itself is quite flat and best explored on foot—a
              leisurely way of soaking in the local ambiance and lifestyle.
              Particularly around Merriton Landing, walking is ideal for
              uncovering hidden gems that only pedestrian exploration can
              reveal. So why not lace up those comfy shoes and head out?
            </p>
            <p className="mt-8">
              {`Visiting Taniti is more than just a vacation—it's about embracing unique experiences one could only dream of! From flying into this tropical haven to wandering around on foot or cycling through lush landscapes—it all adds up to create lifelong memories in an unparalleled Pacific paradise.`}
            </p>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </main>
  );
}
