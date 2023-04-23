import Head from 'next/head'
import {AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineMobile} from 'react-icons/ai'
import {GoBrowser} from 'react-icons/go'
import {GiConsoleController} from 'react-icons/gi'
import Image from 'next/image';
import franz from '../public/franzbig.png'
import stellarview from '../public/stellarview.png'
import patient from '../public/patient.jpg'
import dragonattack from '../public/dragonattack.jpg'
import litegram from '../public/litegram.png'
import cruelcrusade from '../public/cruelcrusade.png'
import leaseorhome from '../public/leaseorhome.png'
import photogram from '../public/photogram.png'
import ecommerce from "../public/ecommerce.png"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Franz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className=' bg-yellow-50 px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
       <nav className='py-10 mb-12 flex justify-between'>
         {/* 
          <h1 className=' text-xl font-burtons'>Franz Cadiente Portfolio</h1>
          <ul className='flex items-center'>
            <li> <a className=' bg-orange-500 text-white px-4 py-2 rounded-lg ml-8' href="#">Resume</a></li>
          </ul> */}
        </nav> 
        <div className='text-center p-2'>
          <h2 className='text-5xl py-2 text-orange-500 font-medium md:text-6xl'>Franz Cadiente</h2>
          <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer.</h3>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-orange-300 rounded-full w-80 h-80 mt-10 md:h-96 md:w-96'>
          <Image src={franz} layout="fill" objectFit='cover'/>
        </div>
        <div className='text-center p-2'>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>Hello! I am Franz, a software developer and passionate game-programming graduate based in Toronto. I consider myself as a goal-oriented and driven individual who is always learning new tech-industry concepts and open to utilizing new technologies.</p>
        </div>
        <div className=' text-5xl flex justify-center gap-10 py-5 text-orange-500'>
            <a href='https://www.linkedin.com/in/franzcadiente/'><AiFillLinkedin /></a>
            <a href='mailto:fmpcadiente@gmail.com'><AiOutlineMail /></a>
            <a href='https://github.com/franzcad1'><AiFillGithub /></a>
        </div>
          <div>
            <h3 className='text-3xl py-1'>Specializations</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>I have great interest in full-stack development, game development, mobile application development, agile methodology, and everything in between.</p>
          </div>
          <div className="lg:flex gap-10">
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GoBrowser className=' text-8xl text-orange-500' />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Web Development</h3>
              <p className='py-4'>I am able to create and design both the front-end and the back-end of web applications. I am most familiar with using the MERN stack.</p>
              <p className=' py-1 text-orange-700'>Full Stack Development</p>
              <p className='text-orange-700 py-1'>React.js</p>
              <p className='text-orange-700 py-1'>Node.js</p>
              <p className='text-orange-700 py-1'>Javascript ES6+</p>
              <p className='text-orange-700 py-1'>Express</p>
              <p className='text-orange-700 py-1'>HTML & CSS</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AiOutlineMobile className=' text-8xl text-orange-500' />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Mobile Development</h3>
              <p className='py-4'>I am able to develop mobile applications for Android devices using Java.</p>
              <p className=' py-1 text-orange-700'>Java</p>
              <p className='text-orange-700 py-1'>Android Studio</p>
              <p className='text-orange-700 py-1'>Google Maps API</p>
              <p className='text-orange-700 py-1'>Object-Oriented Programming</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GiConsoleController className=' text-8xl text-orange-500' />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Game Development</h3>
              <p className='py-4'>I am proficient at designing and programming different genres of games with the use of Unity Engine.</p>
              <p className=' py-1 text-orange-700'>Unity Engine</p>
              <p className='text-orange-700 py-1'>Web and Mobile Games</p>
              <p className='text-orange-700 py-1'>2D and 3D</p>
              <p className='text-orange-700 py-1'>Virtual Reality</p>
              <p className='text-orange-700 py-1'>C++</p>
              <p className='text-orange-700 py-1'>C#</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Here are some of the projects that I have worked on that show my skill-set.</p>
          </div>
          <div className=' flex flex-col gap-3 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
              <a href="https://photo-gram-beta.vercel.app/"><Image src={photogram} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://github.com/franzcad1/Dragon-Attack"><Image src={dragonattack} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/> </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://github.com/franzcad1/Cruel-Crusade"><Image src={cruelcrusade} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://github.com/franzcad1/stellar-view"><Image src={stellarview} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://github.com/COMP-313-Group1/LiteGram"><Image src={litegram} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/> </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://github.com/franzcad1/medical-database"><Image src={patient} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://github.com/franzcad1/LeaseOrRentHome"><Image src={leaseorhome} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://shoponlyfranz.com/"><Image src={ecommerce} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></a>
            </div>
          </div>
        </section>
        <p className='text-sm text-center p-6 text-gray-800'>Designed by Franz Cadiente. ©</p>
      </main>
    </div>
  );
}
