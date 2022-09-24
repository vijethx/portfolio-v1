import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Writings() {
  return (
    <div className='m-10'>
      <Head>
        <title>Writings | Vijeth ☀</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container flex flex-col max-w-xl mx-auto'>
        <Navbar />
        <div className='flex flex-col pb-10'>
          <h1 className='text-5xl font-bold pb-5'>/writings</h1>
          <p className='text-gray-700 text-5xl font-["Passions_Conflict"]'>
            &quot;Carpe diem.&quot;
          </p>
          {console.log("Seize the day")}
        </div>
        <Template
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?"
          }
          url={"https://vijeth.vercel.app"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio minima tempora sed, labore error? At quasi veritatis aut mollitia placeat labore tenetur molestiae commodi!"
          }
        />
      </main>

      <Footer />
    </div>
  );
}

const Template = ({ title, desc, url }) => {
  return (
    <div className='flex justify-between pb-1'>
      <a
        href={url}
        target='_blank'
        className='font-bold text-md text-sky-800'
        rel='noreferrer'>
        {title}
        <p className='text-gray-400 text-md font-normal text-justify'>{desc}</p>
      </a>{" "}
    </div>
  );
};
