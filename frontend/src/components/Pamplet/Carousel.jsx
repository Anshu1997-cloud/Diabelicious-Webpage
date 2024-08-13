import { useEffect, useState } from "react";


export default function Carousel({ children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
 }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
       if(!autoSlide) return
       const slideInterval = setInterval(next, autoSlideInterval )
       return () => clearInterval(slideInterval)
  }, [])


  return (
    <div className= "overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`transition-all w-3 h-3 rounded-full ${curr === i ? "bg-white p-2" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

