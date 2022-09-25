import { SiGithub, SiTwitter } from "react-icons/si";
const Footer = () => {
  return (
    <div className='flex flex-col space-y-4 border-t max-w-xl  mt-5 pt-3 -mb-5 mx-auto '>
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
      <div className='font-[Satoshi] container flex flex-col md:flex-row space-x-2 mx-auto items-center justify-center'>
        <p className='text-center'>
          Build with a{" "}
          <a
            className=' text-sky-600 hover:underline'
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            NextJS
          </a>{" "}
          and{" "}
          <a
            className=' text-sky-600 hover:underline'
            href='https://tailwindcss.com/'
            target='_blank'
            rel='noopener noreferrer'>
            Tailwind CSS
          </a>{" "}
        </p>
        <p className='hidden md:flex'>•</p>
        <p>
          View Source on{" "}
          <a
            className=' text-sky-600 hover:underline'
            href='https://github.com/vijethx/portfolio-v1'
            target='_blank'
            rel='noopener noreferrer'>
            GitHub
          </a>{" "}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Footer;
