const Footer = () => {
  return (
    <div className='font-[Satoshi] container flex flex-col md:flex-row max-w-xl mt-5 pt-3 -mb-5 mx-auto border-t space-x-2 items-center justify-center'>
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
  );
};

export default Footer;
