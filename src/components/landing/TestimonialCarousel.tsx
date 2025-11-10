import { useEffect, useState } from "react";
import { testimonials } from "../../utils/Testimonials"

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayInterval = 5000;
  
  const showNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const showPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]); 
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay && !isAnimating) {
      interval = setInterval(() => {
        showNext();
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, isAnimating, currentIndex]);

  return (
    <div className="relative overflow-hidden px-4">
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <button
          className="flex justify-center items-center  h-12 w-12 rounded-full text-purple-300 opacity-75 transition-all hover:bg-purple-500/10 hover:opacity-100"
          onClick={showPrevious}
          disabled={isAnimating}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="sr-only">Previous testimonial</span>
        </button>
      </div>
      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
        <button
          className="flex justify-center items-center h-12 w-12 rounded-full text-purple-300 opacity-75 transition-all hover:bg-purple-500/10 hover:opacity-100"
          onClick={showNext}
          disabled={isAnimating}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span className="sr-only">Next testimonial</span>
        </button>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => ( 
            <div key={testimonial.id} className="min-w-full px-16">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-purple-500/20 bg-purple-500/5">
                  <img
                    src={testimonial.avatar || "https://placehold.co/600x400"}
                    alt={testimonial.name}
                    className="object-cover h-20 w-20"
                  />
                </div>
                <blockquote className="text-center">
                  <p className="relative mb-4 text-lg text-purple-100/90">
                    {testimonial.quote}
                  </p>
                  <footer className="text-sm">
                    <cite className="not-italic">
                      <span className="block font-semibold text-purple-300">
                        {testimonial.name}
                      </span>
                      <span className="text-purple-400/60">
                        {testimonial.role}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-purple-500 w-6"
                : "bg-purple-500/20 hover:bg-purple-500/40"
            }`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
              }
            }}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export { TestimonialCarousel };
