import { useState } from 'react'
import User from '../../assets/imgs/user-login.png'
import { Input } from '../../components/Input'

export function Admin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen container max-w-[420px] mx-auto px-6 text-center'>
        <img src={User} alt='Imagem de usuário' className='w-60 h-60'/>
        <h2 className='font-StretchPro text-5xl text-primary'>Login</h2>
        <form action="" className='mt-12 space-y-4 '>
          <Input type='text' placeholder='📧   Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input type='password' placeholder='🔑   Digite seu senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type='submit' className='px-6 py-4 bg-primary text-black font-semibold font-grotesk hover:scale-105 ease-in-out duration-300 rounded-full w-full' >Acessar</button>
        </form>
      </div>
  )
}
