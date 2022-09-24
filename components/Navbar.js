import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className='pb-10 font-[Satoshi] flex items-center justify-between'>
        <h1 className='text-lg font-bold'>
          {/* <Link href={"/"}>vijethx</Link> */}
        </h1>
        <ul className='flex items-center justify-end md:space-x-6 space-x-3'>
          {/* <li className='hover:underline'>
            <Link href={"/inspirations"}>/inspirations</Link>
          </li>
          <li className='hover:underline'>
            <Link href={"/resources"}>/resources</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
