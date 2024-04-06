import Image from "next/image";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Hero from "../../public/gray-box.png";

const posts = [
  {
    id: 1,
    title: "Dining",
    href: "/dining",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: Hero.src,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl: Hero.src,
    },
  },
  {
    id: 2,
    title: "Lodging",
    href: "/lodging",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: Hero.src,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl: Hero.src,
    },
  },
  {
    id: 3,
    title: "Transportation",
    href: "/transportation",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: Hero.src,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl: Hero.src,
    },
  },
  {
    id: 4,
    title: "Activities",
    href: "/activities",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: Hero.src,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl: Hero.src,
    },
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <div className="relative w-full">
        <div className="relative h-80 overflow-hidden  md:absolute md:left-0 md:top-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="p-32 h-full w-full object-contain"
            src={Hero.src}
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {`Taniti is a small, tropical island in the Pacific.`}
            </p>
            <p className="mt-6 text-base leading-7 ">
              While the island has an area of less than 500 square miles, the
              terrain is varied and includes both sandy and rocky beaches, a
              small but safe harbor, lush tropical rainforests, and a
              mountainous interior that includes a small, active volcano. Taniti
              has an indigenous population of about 20,000. Until a recent
              increase in tourism, most the Tanitian economy was dominated by
              fishing or agriculture.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Discover Taniti
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn more about our tropical paradise.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map(post => (
              <article
                key={post.id}
                className="relative w-[300px] isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  {/* <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time> */}
                  {/* <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div> */}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
