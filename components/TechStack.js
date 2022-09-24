import Image from "next/image";
import logo1 from "../public/logo-1.svg";
import logo2 from "../public/logo-2.svg";
import logo3 from "../public/logo-3.svg";
import logo4 from "../public/logo-4.svg";
import logo5 from "../public/logo-5.svg";
import logo6 from "../public/logo-6.svg";
import logo7 from "../public/logo-7.svg";
import logo8 from "../public/logo-8.svg";

const TechStack = () => {
  return (
    <div>
      <h1 className='text-xl font-bold py-5'>My Current Tech Stack</h1>
      <div className='flex items-center justify-center flex-wrap'>
        <div className='drop-shadow-xl w-12 h-12 m-3'>
          <a
            href='https://www.javascript.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={logo1} className='rounded-full' alt='javascript' />
          </a>
        </div>
        <div className='drop-shadow-xl w-12 h-12 m-3 '>
          <a
            href='https://www.reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={logo2} className='rounded-full' alt='reactjs' />
          </a>
        </div>
        <div className='drop-shadow-xl w-12 h-12 m-3 '>
          <a
            href='https://www.nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={logo3} className='rounded-full' alt='nextjs' />
          </a>
        </div>
        <div className='drop-shadow-xl w-12 h-12 m-3 '>
          <a
            href='https://chakra-ui.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={logo7} className='rounded-full' alt='chakraui' />
          </a>
        </div>
        <div className='drop-shadow-xl w-12 h-12 m-3 '>
          <a
            href='https://tailwindcss.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={logo8} className='rounded-full' alt='tailwindcss' />
          </a>
        </div>
        <div className='drop-shadow-xl w-12 h-12 m-3 '>
          <a
            href='https://soliditylang.org/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={logo4} className='rounded-full' alt='solidity' />
          </a>
        </div>
        <div className='drop-shadow-xl w-12 h-12 m-3 '>
          <a
            href='https://ethereum.org/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={logo6} className='rounded-full' alt='ethereum' />
          </a>
        </div>
        <div className='drop-shadow-xl w-12 h-12 m-3 '>
          <a
            href='https://hardhat.org/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={logo5} className='rounded-full' alt='hardhat' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
