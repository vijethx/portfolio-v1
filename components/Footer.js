const Footer = () => {
  return (
    <div className='font-[Satoshi] static bottom-0'>
      <p className=''>
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
        • View Source on{" "}
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
