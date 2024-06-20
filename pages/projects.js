import Link from "next/link";
import { Navbar } from "../components/navbar";

export default function News() {
  const articles = [
    { source: 'Facial Recognition App', lable: 'OpenCV, Flask', title: 'Real-time facial recognition application using OpenCV joined with Flask', link: 'https://github.com/yashbbb009/FacialRecog' },
    { source: '6502 CPU Emulator', lable: 'C++, Assembly', title: 'Emulation of the original 6502 processor to specification', link: 'https://github.com/yashbbb009/6502Emu' },
    { source: 'Raycast 3D Engine', lable: 'C++', title: 'Simple raycast 3D engine with graphics rendering and random map gen', link: 'https://github.com/yashbbb009/tinyraytracer' },
    { source: 'Trading Bot', lable: 'Python', title: 'Stock trading algorithm that analyzes sentiments based off r/wallstreetbets comments', link: 'https://github.com/yashbbb009/to-the-moon' },
    { source: 'PacmanAI', lable: 'Python', title: 'Rendition of original Pacman, using Bayesian networks, hidden Markov models, & search agents', link: 'https://github.com/yashbbb009/PacmanAI' },
    { source: 'LeNetwork', lable: 'Python', title: 'Recurrent neural network for digit classification using perceptron and linear regression models', link: 'https://github.com/yashbbb009/LeNetwork' }
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
       <div className="navbar-container w-full">
        <Navbar />
      </div>
      <div className="flex mt-2 px-4 mr-2 p-2 text-white justify-start items-center">
        <h1 className="text-4xl font-bold mt-3">Projects</h1>
      </div>

      <main className="flex flex-col flex-1 px-10 text-center">
        <div className="grid grid-cols-1 gap-2 mt-5">
          {articles.map((article, index) => (
            <Link
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={article.link}
              className="p-4 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-2 hover:bg-gray-700 transition"
              passHref
            >
              <div>
                <p className="text-gray-400 text-med text-left uppercase">{article.source}</p>
                <p className="text-gray-400 text-sm text-left">{article.lable}</p>
                <h2 className="text-lg font-medium text-white text-left">{article.title} ↗</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}