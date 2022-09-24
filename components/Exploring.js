const Exploring = () => {
  return (
    <div className='font-[Satoshi] pb-5'>
      <h1 className='text-xl font-bold py-5 underline underline-offset-4'>
        /exploring
      </h1>

      <div className='flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0'>
        <div className='flex flex-col space-y-3 text'>
          <Template name={"Core CS Concepts"} />
          <Template name={"Core Blockchain"} />
          <Template name={"Adv Ethereum"} />
        </div>
        <div className='flex flex-col space-y-3'>
          <Template name={"Cryptography"} />
          <Template name={"Zero Knowledge Proof"} />
          <Template name={"Cyber Security"} />
        </div>
      </div>
    </div>
  );
};

/*
Gas Optimization
Smart Contract Auditing
Adv Math
Economics
Game Theory
Dev Tooling
Performance & Optimization
*/

const Template = ({ name }) => {
  return (
    <div className='text-md'>
      <div className='flex space-x-2'>
        <svg
          className='w-6 h-6 text-yellow-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
          />
        </svg>
        <p className={""}>{name} </p>
      </div>
    </div>
  );
};

export default Exploring;
