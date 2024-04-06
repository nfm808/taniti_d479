import Image from "next/image";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Hero from "../../../public/bird.jpg";
import Faq from "../component/Faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Faq />
      <Footer />
    </main>
  );
}
