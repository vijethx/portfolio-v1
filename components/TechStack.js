const TechStack = () => {
  return (
    <div className='font-[Satoshi] pb-5'>
      <h1 className='text-xl font-bold py-5 underline underline-offset-4'>
        /techstack
      </h1>

      <div className='flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0'>
        <div className='flex flex-col space-y-3'>
          <Tech name={"NextJS"} active={true} />
          <Tech name={"JavaScript"} active={true} />
          <Tech name={"Tailwind"} active={true} />
          <Tech name={"ChakraUI"} active={true} />
          <Tech name={"Solidity"} active={true} />
          <Tech name={"Hardhat"} active={true} />
        </div>
        <div className='flex flex-col space-y-3'>
          <Tech name={"NodeJS"} active={true} />
          <Tech name={"React Query"} active={true} />
          <Tech name={"GraphQL"} />
          <Tech name={"TypeScript"} />
          <Tech name={"Redux"} />
          <Tech name={"Python"} />
        </div>
        <div className='flex flex-col space-y-3'>
          <Tech name={"PostgreSQL"} />
          <Tech name={"Web Security"} />
          <Tech name={"Foundry"} />
          <Tech name={"React Native"} />
        </div>
        {/* <div className='flex flex-col space-y-3'>
          
        </div> */}
      </div>
    </div>
  );
};

const Tech = ({ name, active }) => {
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
