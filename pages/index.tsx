import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>KASEM - UZBEKISTAN</title>
        <meta name="description" content="KASEM Uzbekistan - KARABUK UNIVERSITY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="relative min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-2xl mx-auto px-4 py-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="mb-4 mt-0">
              <span className="text-2xl md:text-4xl font-extrabold tracking-widest text-cyan-200 drop-shadow-lg animate-glow" style={{letterSpacing: '0.2em', marginTop: '-2.5rem', display: 'inline-block'}}>KARABUK UNIVERSITY</span>
            </div>
            <img 
              src="/favicon.png" 
              alt="KASEM logo" 
              className="mx-auto mb-4 w-20 md:w-28 opacity-90 select-none pointer-events-none"
              aria-hidden="true"
            />
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              KASEM
              <span className="block text-2xl md:text-4xl mt-2 text-cyan-200 font-bold tracking-widest animate-glow">UZBEKISTAN</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center mt-16">
              <motion.a
                whileHover={{ scale: 1.08, boxShadow: '0 0 24px 8px #38bdf8' }}
                whileTap={{ scale: 0.97 }}
                href="https://kasem.karabuk.edu.tr/student"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full md:w-auto bg-blue-600/80 hover:bg-blue-500 text-white font-bold py-4 md:py-4 px-6 md:px-12 rounded-2xl text-lg md:text-xl shadow-xl transition-all duration-300 outline-none focus:ring-4 focus:ring-cyan-400/60 mb-4 md:mb-0"
                style={{ boxShadow: '0 0 32px 0 #38bdf8aa, 0 2px 8px 0 #0008' }}
              >
                <span className="relative z-10">STUDENTS</span>
                <span className="absolute inset-0 rounded-2xl blur-xl opacity-60 bg-cyan-400 group-hover:opacity-80 group-hover:blur-2xl transition-all duration-300 animate-glow" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08, boxShadow: '0 0 24px 8px #38bdf8' }}
                whileTap={{ scale: 0.97 }}
                href="https://kasem.karabuk.edu.tr/academic"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full md:w-auto bg-blue-600/80 hover:bg-blue-500 text-white font-bold py-4 md:py-4 px-6 md:px-12 rounded-2xl text-lg md:text-xl shadow-xl transition-all duration-300 outline-none focus:ring-4 focus:ring-cyan-400/60"
                style={{ boxShadow: '0 0 32px 0 #38bdf8aa, 0 2px 8px 0 #0008' }}
              >
                <span className="relative z-10">ACADEMIC</span>
                <span className="absolute inset-0 rounded-2xl blur-xl opacity-60 bg-cyan-400 group-hover:opacity-80 group-hover:blur-2xl transition-all duration-300 animate-glow" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>
      <style jsx global>{`
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 16px #38bdf8cc); }
          50% { filter: drop-shadow(0 0 32px #38bdf8ff); }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </>
  );
} 