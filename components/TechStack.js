const TechStack = () => {
  return (
    <div className='font-[Satoshi] pb-5'>
      <h1 className='text-xl font-bold py-5 underline underline-offset-4'>
        /techstack
      </h1>

      <div className='flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0'>
        <div className='flex flex-col space-y-3'>
          <Template name={"NextJS"} active={true} />
          <Template name={"JavaScript"} active={true} />
          <Template name={"Tailwind"} active={true} />
          <Template name={"ChakraUI"} active={true} />
          <Template name={"Solidity"} active={true} />
          <Template name={"Hardhat"} active={true} />
        </div>
        <div className='flex flex-col space-y-3'>
          <Template name={"NodeJS"} active={true} />
          <Template name={"React Query"} active={true} />
          <Template name={"GraphQL"} />
          <Template name={"TypeScript"} />
          <Template name={"Redux"} />
          <Template name={"Python"} />
        </div>
        <div className='flex flex-col space-y-3'>
          <Template name={"PostgreSQL"} />
          <Template name={"Web Security"} />
          <Template name={"Foundry"} />
        </div>
        {/* <div className='flex flex-col space-y-3'>
          <Template name={"Figma"} active={true} />
          <Template name={"Solidity"} />
          <Template name={"Hardhat"} />
          <Template name={"Tailwind"} />
          <Template name={"ChakraUI"} />
        </div> */}
      </div>
    </div>
  );
};

const Template = ({ name, active }) => {
  return (
    <div className=' '>
      <div className='flex space-x-2'>
        <svg
          className='w-6 h-6 text-sky-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 8l4 4m0 0l-4 4m4-4H3'
          />
        </svg>
        <p
          className={`font-bold text-justify ${
            active ? "text-black" : "text-gray-400"
          } `}>
          {name}{" "}
        </p>
      </div>
      {/* <p className=''>{desc}</p> */}
    </div>
  );
};

export default TechStack;
