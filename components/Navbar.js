import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false); //mobile menu drawer
  return (
    <>
      <nav className='pb-10 font-[Satoshi] flex flex-col md:flex-row md:items-center md:justify-between'>
        <h1 className='text-xl font-bold'>
          <Link href={"/"}>vijethx</Link>
        </h1>
        {/* <button
          id='menu-btn'
          onClick={() => setIsOpen(!isOpen)}
          class='block hamburger md:hidden focus:outline-none z-50'>
          {isOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button> */}
        <ul className='flex items-center md:justify-end md:space-x-6 space-x-3'>
          <li className='hover:underline'>
            <Link href={"/buidls"}>/buidls</Link>
          </li>
          <li className='hover:underline'>
            <Link href={"/writings"}>/writings</Link>
          </li>
          <li className='hover:underline'>
            <Link href={"/inspirations"}>/inspirations</Link>
          </li>
          <li className='hover:underline'>
            <Link href={"/resources"}>/resources</Link>
          </li>
        </ul>
      </nav>
      {/* mobile menu */}
      {/* {isOpen && <FullScreenMenu />} */}
    </>
  );
};

// const FullScreenMenu = () => {
//   return (
//     <ul className='absolute md:hidden items-center justify-center py-4 px-4 mt-10 space-y-4 font-bold text-2xl bg-white z-50 sm:w-auto left-10 right-10 mx-drop-shadow-sm h-[90%]'>
//       <li className='hover:underline'>
//         <Link href={"/"}>
//           <span className=''>/</span>
//         </Link>
//       </li>
//       <li className='hover:underline'>
//         <Link href={"/buidls"}>
//           <span className=''>/buidls</span>
//         </Link>
//       </li>
//       <li className='hover:underline'>
//         <Link href={"/writings"}>
//           <span className=''>/writings</span>
//         </Link>
//       </li>
//       <li className='hover:underline'>
//         <Link href={"/inspirations"}>
//           <span className=''>/inspirations</span>
//         </Link>
//       </li>
//       <li className='hover:underline'>
//         <Link href={"/resources"}>
//           <span className=''>/resources</span>
//         </Link>
//       </li>
//     </ul>
//   );
// };

export default Navbar;
