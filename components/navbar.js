// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from '../pages/resources/logo.svg';

// export const Navbar = () => {
//     const router = useRouter();
//     const currentPath = router.pathname;

//     return (
//         <nav className='bg-black flex items-center h-16'>
//             <div className='flex items-center justify-center w-full'>
//                 <div className='flex items-center justify-center'>
//                     <Link className='block text-sm text-white tracking-wide mr-6' href='/' passHref>
//                         <Image src={logo} height={25} width={25} alt="Yash Bardhan" />
//                     </Link>
//                     <Link href="/" className={`block text-sm text-white tracking-wide mr-6 ${currentPath === '/' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`} passHref>Home</Link>
//                     <Link href="/projects" className={`block text-sm text-white tracking-wide mr-6 ${currentPath === '/news' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`} passHref>Projects</Link>
//                     <Link href="/background" className={`block text-sm text-white tracking-wide ${currentPath === '/background' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`} passHref>Experience</Link>
//                     <Link href="https://drive.google.com/file/d/1hWwdt3OvTG5hx3UvcSAz01igJf201JDv/view?usp=sharing" className={`block text-sm text-white tracking-wide ${currentPath === '/background' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`} passHref>Resume</Link>

//                 </div>
//             </div>
//         </nav>
//     );
// };


import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../pages/resources/logo.svg';

export const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className="bg-black flex items-center h-16">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center space-x-6">
          <Link className="block text-sm text-white tracking-wide" href="/" passHref>
            <Image src={logo} height={25} width={25} alt="Yash Bardhan" />
          </Link>
          <Link
            href="/"
            className={`block text-sm text-white tracking-wide ${currentPath === '/' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`}
            passHref
          >
            Home
          </Link>
          <a
            href="https://github.com/yasbbb"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-white tracking-wide text-gray-400 hover:text-gray-300"
          >
            Projects
          </a>
          <Link
            href="/background"
            className={`block text-sm text-white tracking-wide ${currentPath === '/background' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`}
            passHref
          >
            Experience
          </Link>
          <a
            href="https://drive.google.com/file/d/1hWwdt3OvTG5hx3UvcSAz01igJf201JDv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-white tracking-wide text-gray-400 hover:text-gray-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
