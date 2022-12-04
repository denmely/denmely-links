export function Card({title, uri}) {
    return (
      <div className="bg-zinc-900 text-white p-6 rounded-full hover:bg-zinc-800">
        <a href="{uri}">{title}</a>
      </div>
    )
  }
  