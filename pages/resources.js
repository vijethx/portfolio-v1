import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Resources() {
  return (
    <div className='m-10'>
      <Head>
        <title>Resources | Vijeth ☀</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container flex flex-col max-w-xl mx-auto'>
        <Navbar />
        <div className='flex flex-col pb-5'>
          <h1 className='text-4xl md:text-5xl font-bold pb-5'>/resources</h1>
        </div>
        WIP
      </main>

      {/* <Footer /> */}
    </div>
  );
}

const Template = ({ title, url }) => {
  return (
    <div className='flex flex-col pb-2'>
      <div className='flex align-center space-x-2'>
        <span className=''>💎</span>
        <a href={url} className='text-justify underline underline-offset-4'>
          {title}
        </a>
      </div>
    </div>
  );
};
