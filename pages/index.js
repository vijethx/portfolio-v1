import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";
import { SiGithub, SiTwitter } from "react-icons/si";
import Projects from "../components/Projects";
import Exploring from "../components/Exploring";

export default function Home() {
  return (
    <div className='m-10'>
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
          <h1 className='text-4xl md:text-5xl font-bold pb-5 flex'>
            gm! i&apos;m vijeth 👋
          </h1>
          <p className='text-gray-700 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            dolorum!{" "}
          </p>
          <p className='text-gray-700 text-lg'>
            If you&apos;re building something cool, I&apos;d love to hear about
            it. Even if you&apos;re not and just want to hang out and chill,
            i&apos;m pretty much active on{" "}
            <a
              href='http://twitter.com/vijethx'
              target='_blank'
              className='text-sky-600 underline underline-offset-2 '
              rel='noopener noreferrer'>
              twitter
            </a>
            .
          </p>
        </div>
        <div className='flex items-center justify-center space-x-5 text-xl '>
          <a
            className='hover:text-sky-600'
            href='http://twitter.com/vijethx'
            target='_blank'
            rel='noopener noreferrer'>
            <SiTwitter />
          </a>
          <a
            className='hover:text-sky-600'
            href='http://github.com/vijethx'
            target='_blank'
            rel='noopener noreferrer'>
            <SiGithub />
          </a>
        </div>

        <TechStack />
        <Projects />
        <Exploring />
      </main>

      <Footer />
    </div>
  );
}
