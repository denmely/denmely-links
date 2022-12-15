export function Input({type, placeholder, ...props }) {
    return (
        <input type={type} placeholder={placeholder} {...props} className='px-6 py-4 bg-[#101012] placeholder-zinc-700 font-medium rounded-full w-full' />
    )
}