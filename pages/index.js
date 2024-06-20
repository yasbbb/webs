import Head from 'next/head';
import { Navbar } from '../components/navbar';
import yash_pfp from './resources/yash.png';
import Image from 'next/image';
import Link from "next/link";
import github_logo from '../pages/resources/github-logo.svg';
import linkedin_logo from '../pages/resources/linkedin-logo.svg';
import discord_logo from '../pages/resources/discord-logo.svg';
import email_logo from '../pages/resources/email-logo.svg';
import styles from './index.module.css';


export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <Head>
        <title>Yash Bardhan</title>
        <link rel="icon" href='/' />
      </Head>
      <div className="top-0 w-full z-50">
        <div className="navbar-container">
          <Navbar />
        </div>
      </div>
      <main className="pt-8 flex flex-col items-center bg-black w-full px-10">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center space-y-4 w-full max-w-screen-sm">
            <Image
              src={yash_pfp}
              className={`object-cover ${styles.profileImage}`}
              style={{ ...styles.object, width: '100px', height: '100px' }}
              alt="Austin Wang" />
            <div className="text-center mb-6">
              <h1 className="text-5xl font-bold text-white">
                Yash Bardhan
              </h1>
              <p className="text-md font-sm text-gray-100 mt-2">
                CS / Finance @ UT Dallas
              </p>
              <div className="flex justify-center mb-2 mt-2 space-x-4">
                <Link href='https://github.com/yasbbb' target="_blank" rel="noopener noreferrer" className='inline-flex items-center transform transition-transform hover:scale-110' passHref>
                  <div>
                    <Image src={github_logo} height={24} width={24} alt="Github" />
                  </div>
                </Link>
                <Link href='https://www.linkedin.com/in/yashbardhan09/' target="_blank" rel="noopener noreferrer" className='inline-flex items-center transform transition-transform hover:scale-110' passHref>
                  <div>
                    <Image src={linkedin_logo} height={24} width={24} alt="Linkedin" />
                  </div>
                </Link>
                <Link href='' target="_blank" rel="noopener noreferrer" className='inline-flex items-center transform transition-transform hover:scale-110' passHref>
                  <div>
                    <Image src={discord_logo} height={24} width={24} alt="Twitter" />
                  </div>
                </Link>
                <Link href='mailto:yash.bardhan09@gmail.com' target="_blank" rel="noopener noreferrer" className='inline-flex items-center transform transition-transform hover:scale-110' passHref>
                  <div>
                    <Image src={email_logo} height={20} width={20} alt="Instagram" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-gray-400 text-center pt-8 pb-16 md:pb-8 md:px-8">
              Most of the time, I'm {/* <Link href="https://manaflow.ai" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-blue-500" passHref> */} {/*  </Link> */}a student studying computer science and finance at the University of Texas at Dallas. My background spans from experience at <Link href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-blue-500" passHref>Stanford</Link>, <Link href="https://www.comerica.com/" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-blue-500" passHref>Comerica Bank</Link>, and <Link href="https://www.choicehotels.com/" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-blue-500" passHref>Choice Hotels</Link>. <br /><br />

              Beyond school, I spend my time as Co-Founder & CEO of <Link href="https://www.linkedin.com/company/fechai" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-blue-500" passHref> FechAI</Link>, a comprehensive platform where we empower users without technical skills to integrate AI-powered applications into their daily lives. <br /><br />

              Outside of tech, I enjoy listening to <Link href="https://www.youtube.com/watch?v=Q1ViJEYNki4&ab_channel=KanyeWest-Topic" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-blue-500" passHref> rap music</Link>, playing sports, and <Link href="https://overwatch.fandom.com/wiki/Genji" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-blue-500" passHref> gaming</Link>. Some of my goals for the future are to explore new countries and cuisines.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}




