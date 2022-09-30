import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Exploring from "../components/Exploring";

export default function Home() {
  return (
    <div className='m-10'>
      <Head>
        <title>Vijeth ☀</title>
        {/* Primary Meta Tags */}
        <title>Vijeth ☀</title>
        <meta name='title' content='Vijeth ☀' />
        <meta
          name='description'
          content="Vijeth's real estate on the internet to showoff his buidls"
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://vijeth.vercel.app/' />
        <meta property='og:title' content='Vijeth ☀' />
        <meta
          property='og:description'
          content="Vijeth's real estate on the internet to showoff his buidls"
        />
        <meta
          property='og:image'
          content='https://vijeth.vercel.app/luffy.jpg'
        />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://vijeth.vercel.app/' />
        <meta property='twitter:title' content='Vijeth ☀' />
        <meta
          property='twitter:description'
          content="Vijeth's real estate on the internet to showoff his buidls"
        />
        <meta
          property='twitter:image'
          content='https://vijeth.vercel.app/luffy.jpg'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='font-[Satoshi] container flex flex-col max-w-xl mx-auto'>
        <Navbar />
        <div className='pb-5'>
          <h1 className='text-4xl md:text-5xl font-bold pb-5 flex'>
            gm! i&apos;m vijeth 👋
          </h1>
          <p className='text-gray-700 text-lg py-2'>
            Inquizitive self-taught developer / buildooor with a keen interest
            on the web and EVM-based blockchains.
          </p>
          <div className='text-gray-700 text-lg py-2 flex flex-col space-y-2'>
            <p className='font-bold underline underline-offset-2'>
              What am I doing currently?
            </p>
            <p className=''>
              <span className=''>🎯</span> Shipping (atleast) one project a
              month till Dec &apos;22
            </p>
            <p className=''>
              <span className=''>🚀</span> Focusing on getting better at writing
              robust smart contracts, building super-fast web apps and shipping
              products
            </p>
          </div>
          <p className='text-gray-700 text-lg py-2'>
            If you&apos;re building something cool, I&apos;d love to hear about
            it. Even if you&apos;re not and just want to hang out and chill,
            i&apos;m pretty much active on{" "}
            <a
              href='http://twitter.com/vijethx'
              target='_blank'
              className='text-sky-600 underline underline-offset-2 font-bold'
              rel='noopener noreferrer'>
              twitter
            </a>
            .
          </p>
        </div>

        <TechStack />
        <Projects />
        <Exploring />
      </main>

      <Footer />
    </div>
  );
}
