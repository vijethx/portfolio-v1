import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Inspirations() {
  return (
    <div className='m-10 min-h-screen'>
      <Head>
        <title>Inspirations | Vijeth ☀</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container flex flex-col max-w-xl mx-auto'>
        <Navbar />
        <div className='flex flex-col pb-5'>
          <h1 className='text-4xl md:text-5xl font-bold pb-5'>/inspirations</h1>
        </div>
        <Template
          title={"Bitcoin: A Peer-to-Peer Electronic Cash System"}
          url={"https://bitcoin.org/bitcoin.pdf"}
        />
        <Template
          title={"Ethereum Whitepaper (Updated)"}
          url={"https://ethereum.org/en/whitepaper/"}
        />
        <Template
          title={"Vitalik Buterin's Website"}
          url={"https://vitalik.ca/"}
        />
        <Template
          title={"samczsun's posts (on Paradigm's website)"}
          url={"https://www.paradigm.xyz/team/samczsun/posts"}
        />
        <Template
          title={"Paradigm Research"}
          url={"https://www.paradigm.xyz/writing"}
        />
        <Template
          title={"Officer CIA (Security)"}
          url={"https://start.me/p/QRg5ad/officercia"}
        />
        <Template title={"Immersion Den"} url={"https://immersionden.xyz/"} />
        <Template
          title={"Learn How to Build for the Creator Economy by Li Jin"}
          url={"https://creatoreconomycourse.xyz/"}
        />
        <Template
          title={"Library of Web3 - Alex D Phan"}
          url={"https://www.alexdphan.com/research/library-of-web3"}
        />
        <Template
          title={"Token Engineering Community"}
          url={"https://tokenengineeringcommunity.github.io/website/"}
        />
        <Template
          title={"TE Fundamentals Study Groups"}
          url={
            "https://te-academy.notion.site/TE-Fundamentals-Study-Groups-f804dba0577e44578f56c853c20cc91d"
          }
        />
        <Template
          title={"BuidlersTribe Research"}
          url={"https://research.buidlerstribe.com/"}
        />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

const Template = ({ title, url }) => {
  return (
    <div className='flex flex-col pb-2'>
      <div className='flex align-center space-x-2'>
        <span className=''>⚡</span>
        <a href={url} className='text-justify underline underline-offset-4'>
          {title}
        </a>
      </div>
    </div>
  );
};
