import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blogs() {
  return (
    <div className='flex flex-col items-center justify-center p-10 w-50 h-screen'>
      <Head>
        <title>Blogs | Vijeth ☀</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='max-w-xl mb-auto font-[Satoshi]'>
        <Navbar />
        <div className='flex flex-col pb-10'>
          <h1 className='text-3xl font-bold '>/blogs</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, cum?
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
