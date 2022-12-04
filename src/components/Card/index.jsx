import { Link } from "react-router-dom";

export function Card({children, uri}) {
    return (
      <Link to={uri} className="bg-zinc-900 text-white p-6 rounded-full hover:bg-zinc-800 hover:scale-105 ease-in-out duration-300 text-xl font-semibold font-grotesk flex justify-center items-center gap-6">
        {children}
      </Link>
    )
  }
  