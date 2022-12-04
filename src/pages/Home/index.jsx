import Profile from '../../assets/imgs/profile.jpg'
import { Card } from '../../components/Card'

export function Home() {
    return (
      <div className='text-center mt-20 flex flex-col items-center justify-center'>
        <img src={Profile} alt='Foto Tony Denmely' className='w-[6rem] h-[6rem] rounded-full mb-12'/>
        <h1 className='text-5xl text-primary font-StretchPro'>Denmely</h1>

        <div className='mt-16 container max-w-screen-sm mx-auto'>
          <Card title='My Portfolio' uri='http://denmely.dev'/>
        </div>
      </div>
    )
  }
  