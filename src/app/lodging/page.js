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
            {`Your Stay on Taniti Island`}
          </h1>
          <p className="mt-6 text-xl leading-8">
            {` The beauty of Taniti isn't just skin deep. This place knows how to host guests. Accommodation spans across various budgets and preferences - from frugal-friendly hostels for backpackers wanting to save their coin for exploring, to top-tier resorts catering to luxury-seekers needing comfort after an adventurous day out.`}
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              {`And you can rest easy knowing your choice of stay is legitimate and safe as the local government holds every lodging establishment under strict regulation. Regular inspections ensure that even the smallest family-owned hotel or quaint bed-and-breakfast meets set standards.`}
            </p>

            <p className="mt-8">
              {`So whether you're drawn towards personalized service in homey B&Bs
              run by local families or prefer having a myriad of amenities at
              hand in the four-star resort that graces Taniti's coastline,
              peace-of-mind isn't compromised.`}
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Exploring Diversity In Taniti
            </h2>
            <p className="mt-6">
              {`Taniti keeps things interesting by offering varied landscapes within its limited boundaries. Sandy beaches beckon sun-soakers while rocky counterparts intrigue adventure enthusiasts – you might find yourself spending countless hours beachcombing!`}
            </p>

            <p className="mt-10">
              {`But does it end there? Absolutely not! As tempting as it is to
              laze around on those beaches all day (and who would blame you?),
              remember there's an entire island waiting for your footprints –
              lush rainforests humming with unique wildlife, mountains
              challenging you with rugged trails, and even an active volcano
              promising awe-inspiring views from its brim.`}
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
              Embracing Local Economy
            </h2>
            <p className="mt-6">
              {`Tourism has been breathing fresh life into Taniti's economy
              without overshadowing traditional practices completely. Many
              locals still depend on fishing and farming for their livelihood.
              This harmonious blend of old and new is what makes Taniti an
              extraordinary travel destination.`}
            </p>
            <p className="mt-8">
              {`Here, you have a chance to experience authentic local culture while contributing to its growth. That fresh seafood you relish at dinner? Likely caught by a Tanitian fisherman earlier in the day. The exotic fruits accompanying your breakfast? Picked from native farms dotting the island's landscape. In every way possible, your visit to Taniti fosters a sustainable tourism ecosystem that benefits both visitors and locals alike. `}
            </p>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </main>
  );
}
