import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className='m-4 md:m-10'>
      <Head>
        <title>Vijeth ☀</title>
        <meta
          name='description'
          content="Vijeth's Personal Real Estate on the Internet to Showoff his Buidls"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='font-[Satoshi] container flex flex-col max-w-xl mx-auto'>
        <Navbar />
        <div className='pb-5'>
          <h1 className='text-5xl font-bold pb-5'>Vijeth Revankar</h1>
          <p className='text-gray-700 text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, cum?
          </p>
        </div>

        <TechStack />
      </main>

      <Footer />
    </div>
  );
}
