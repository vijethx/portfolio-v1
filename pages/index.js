import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center p-10 w-50 h-screen'>
      <Head>
        <title>Vijeth ☀</title>
        <meta
          name='description'
          content="Vijeth's Personal Real Estate on the Internet to Showoff his Buidls"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='max-w-xl font-[Satoshi] mb-auto'>
        <Navbar />

        <p>home</p>
      </main>

      <Footer />
    </div>
  );
}
