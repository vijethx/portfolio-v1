import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='pb-10 font-[Satoshi] flex items-center justify-between'>
      <h1 className='text-xl font-bold'>
        <Link href={"/"}>vijethx</Link>
      </h1>
      <ul className='flex items-center justify-end'>
        <li className='mr-3 hover:underline'>
          <Link href={"/buidls"}>/buidls</Link>
        </li>
        <li className='mr-3 hover:underline'>
          <Link href={"/writings"}>/writings</Link>
        </li>
        <li className='mr-3 hover:underline'>
          <Link href={"/inspirations"}>/inspirations</Link>
        </li>
        <li className=' hover:underline'>
          <Link href={"/resources"}>/resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
