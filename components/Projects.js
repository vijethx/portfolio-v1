const Projects = () => {
  return (
    <div className='font-[Satoshi] pb-5'>
      <h1 className='text-xl font-bold py-5 underline underline-offset-4'>
        /buidls
      </h1>

      <div className='flex flex-col space-y-5'>
        <Template
          name={"WavePortal"}
          desc={"Send (one-way) messages on the Ethereum Chain"}
          techUsed={
            "Solidity, Hardhat, JavaScript, ReactJS (w/ CRA), ChakraUI, wagmi.sh and Rainbowkit."
          }
          code={`https://github.com/vijethx/waveportal-frontend`}
          live={`https://vijethx-waveportal.vercel.app`}
        />
        <Template
          name={"Buy Me A Coffee DApp"}
          desc={"A simple tipping dapp on Goerli Testnet"}
          techUsed={"Solidity, Hardhat, JavaScript, NextJS and TailwindCSS."}
          code={`https://github.com/vijethx/BuyMeACoffee-frontend`}
          live={`https://vijethx-buymeacoffee.vercel.app/`}
        />
      </div>
    </div>
  );
};

const Template = ({ name, desc, code, live, techUsed }) => {
  return (
    <div className='flex flex-col space-y-2 pb-5'>
      <div className='flex space-x-2 '>
        <svg
          className='w-6 h-6 text-purple-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
        <p className='font-bold text-justify'>{name} </p>
        <div className='flex space-x-2 justify-end'>
          <a
            href={code}
            className='hover:underline-offset-2 hover:text-sky-600'
            target='_blank'
            rel='noopener noreferrer'>
            [Code]
          </a>

          <a
            href={live}
            className='hover:underline-offset-2 hover:text-sky-600'
            target='_blank'
            rel='noopener noreferrer'>
            [Live]
          </a>
        </div>
      </div>
      <p className=''>{desc}</p>
      <p className=''>
        <span className='font-bold underline underline-offset-2'>
          Tech & tools used
        </span>
        : {techUsed}
      </p>
    </div>
  );
};

export default Projects;
