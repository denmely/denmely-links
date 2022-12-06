import { Link } from 'react-router-dom'
import Alert from '../../assets/imgs/alert-triangle.png'

export function Error() {
    return (
      <div className='flex flex-col items-center justify-center w-screen h-screen space-y-8'>
        <img src={Alert} alt='Imagem de triângulo com interrogação' className='w-60 h-60'/>
        <h2 className='font-StretchPro text-5xl text-primary'>Error 404</h2>
        <p className='text-white font-grotesk text-xl'>☹️ Página não encontrada.</p>
        <Link to='/' className='px-6 py-4 bg-zinc-900 text-white font-semibold font-grotesk hover:bg-zinc-800 hover:scale-105 ease-in-out duration-300 rounded-full' >👈 Voltar para home</Link>
      </div>
    )
  }
  