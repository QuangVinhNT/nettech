import { PlayIcon } from "@heroicons/react/24/outline";

type Props = {
  thumbnail: string;  
  name: string;
  content: string;
  className?: string;
}
const TestimonialCard = (props: Props) => {
  const {thumbnail, name, content, className} = props
  return (
    <div className={`z-0 w-[800px] aspect-[2/1] overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute z-20 w-0 lg:w-[45%] top-0 left-0 h-full bg-[#141C65] p-8 rounded-l-2xl">
        <h2 className="text-2xl font-bold mb-4 hidden lg:block">{name}</h2>
        <p className="font-light hidden lg:block">{content}</p>
      </div>
      <img src={thumbnail} alt="" className="w-full"/>
      <div className="absolute z-10 bg-[#141C65]/50 top-0 left-0 w-full h-full"></div>
      <button className="bg-white absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 shadow-[0_0_20px_rgba(154,255,255,0.7)]">
        <PlayIcon className="size-8 stroke-2 text-red-500"/>
      </button>
    </div>
  )
}

export default TestimonialCard
