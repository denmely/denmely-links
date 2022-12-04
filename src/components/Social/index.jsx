import { Link } from 'react-router-dom';

export function Social({uri, children}) {
    return (
      <Link to={uri} className='bg-zinc-900 text-white p-4 rounded-full hover:bg-zinc-800 hover:scale-110 ease-in-out duration-300 text-xl'>
        {children}
      </Link>
    )
  }
  