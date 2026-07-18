export default function DynamicImage({
    src
} : {
    src : string
}) {
  return (
    <>
        <div 
            style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            className='lg:w-2/3 mt-5 saturate-130 overflow-clip transition-all duration-700 ease-in-out'
        >
            <div className={`w-full h-[300px] lg:h-[400px] flex items-center text-zinc-500 ${!src && "bg-zinc-200"}`}>
                {!src && (
                    <span className='text-lg'>Shop by Room Image Placeholder</span>
                )}
            </div>
        </div>
    </>
  )
} 
