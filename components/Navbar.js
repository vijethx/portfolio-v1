import Image from "next/image";
import Link from "next/link";
import pfp from "../public/pfp.jpg";

const Navbar = () => {
  return (
    <>
      <nav className='pb-10'>
        <ul className='flex items-center justify-end'>
          <li className='mr-4  font-[Satoshi]'>
            <Link href={"/"}>/home</Link>
          </li>
          <li className='mr-4'>
            <Link href={"/buidls"}>/buidls</Link>
          </li>
          <li className=''>
            <Link href={"/blogs"}>/blogs</Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center justify-between pb-10'>
        <div className='flex flex-col '>
          <h1 className='text-3xl font-bold '>Vijeth Revankar</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, cum?
          </p>
        </div>
        <Image
          src={pfp}
          height={"200px"}
          width={"200px"}
          alt='pfp'
          className='rounded-full'
        />
      </div>
    </>
  );
};

export default Navbar;
