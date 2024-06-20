import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../pages/resources/logo.svg';

export const Navbar = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <nav className='bg-black flex items-center h-16'>
            <div className='flex items-center justify-center w-full'>
                <div className='flex items-center justify-center'>
                    <Link className='block text-sm text-white tracking-wide mr-6' href='/' passHref>
                        <Image src={logo} height={25} width={25} alt="Yash Bardhan" />
                    </Link>
                    <Link href="/" className={`block text-sm text-white tracking-wide mr-6 ${currentPath === '/' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`} passHref>Home</Link>
                    <Link href="/projects" className={`block text-sm text-white tracking-wide mr-6 ${currentPath === '/news' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`} passHref>Projects</Link>
                    <Link href="/background" className={`block text-sm text-white tracking-wide ${currentPath === '/background' ? 'font-bold' : 'text-gray-400 hover:text-gray-300'}`} passHref>Experience</Link>
                </div>
            </div>
        </nav>
    );
};