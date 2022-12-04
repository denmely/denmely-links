import Profile from '../../assets/imgs/profile.jpg'
import { FiInstagram, FiGlobe, FiLinkedin } from 'react-icons/fi'
import { Card } from '../../components/Card'

export function Home() {
    return (
      <div className='text-center mt-20 flex flex-col items-center justify-center'>
        <img src={Profile} alt='Foto Tony Denmely' className='w-[6rem] h-[6rem] rounded-full mb-12'/>
        <h1 className='text-5xl text-primary font-StretchPro'>Denmely</h1>
        <p className='text-white font-grotesk text-xl mt-6 w-96'>👋 Meu nome é Tony Denmely, abaixo segue meus links:</p>

        <div className='mt-12 px-6 container max-w-screen-sm mx-auto space-y-4'>
          <Card uri='http://denmely.dev'><FiGlobe className='w-6 h-6 text-primary'/>Conheça meu portfolio</Card>
          <Card uri='http://denmely.dev'><FiInstagram className='w-6 h-6 text-primary'/>Me siga no Instagram</Card>
          <Card uri='http://denmely.dev'><FiLinkedin className='w-6 h-6 text-primary'/>Conecte-se no Linkedin</Card>
        </div>
      </div>
    )
  }
  