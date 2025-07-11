import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import TestimonialCard from "../ui/TestimonialCard";
import Testimonials1 from '@/assets/testimonials_1.png';
import Testimonials2 from '@/assets/testimonials_2.jpg';
import Testimonials3 from '@/assets/testimonials_3.png';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import TestimonialSd1 from '@/assets/background_img/reason_sd1.png'

const testimonials = [
  {
    thumbnail: Testimonials1,
    name: 'Mr. Osamu Tokunaga',
    content: `"Power News needs a partner who comprehends our system's intricacies and our vision, ensuring implementation aligns with our goals for stable project management. I thought it would be really difficult to find a development partner that has all three of these qualities, but I think Nettech is a reliable and trustworthy partner that can execute these three points very well."`
  },
  {
    thumbnail: Testimonials2,
    name: 'Mr. Jung Suk Woo',
    content: `"Nettech's experience in international and Korean business collaborations, coupled with its expertise in information technology, instills confidence in us. Given that our company serves many Korean businesses, the prospect of tripartite cooperation presents an opportunity for us to showcase and enhance our capabilities."`
  },
  {
    thumbnail: Testimonials3,
    name: 'Anna CEO',
    content: `"It was a relaxing project for us as Nettech handled it very well. They deployed a team of professional, smart, knowledgeable, and experienced engineers who worked well in sync with my team and there was almost no misunderstanding. The team was absolutely amazing at helping the two sides to understand each other's languages for effective communication."`
  },
];

const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return (
    <div ref={ref} className="relatitve z-0">
      <img src={TestimonialSd1} alt="" className="absolute z-10 left-1/2 -translate-x-1/2"/>
      <Container
        child={
          <SectionContainer
            label="Testimonials"
            title="Voice of our customers"
            className="py-16 overflow-hidden rounded-2xl relative z-20"
            child={
              <>
                <div className="mt-8 relative z-20 w-full h-[400px]">
                  {testimonials.map((testimonial, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute nth-[1]:z-30 nth-[1]:left-0 nth-[1]:-translate-x-1/3 nth-[1]:scale-80 nth-[2]:z-40 nth-[2]:left-1/2 nth-[2]:-translate-x-1/2 nth-[3]:z-30 nth-[3]:right-0 nth-[3]:translate-x-1/3 nth-[3]:scale-80"
                      initial={window.innerWidth > 1280 ? (idx === 1 ? { opacity: 0, scale: 0 } : { opacity: 0, x: idx === 0 ? 100 : -100 }) : false}
                      animate={window.innerWidth > 1280 && inView ? { opacity: 1, scale: 1, x: 0 } : false}
                      transition={{ duration: 0.3, delay: idx === 1 ? 0 : 0.3 }}
                    >
                      <TestimonialCard name={testimonial.name} content={testimonial.content} thumbnail={testimonial.thumbnail} className={``} />
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-8 mt-4 justify-center items-center">
                  <button className="group relative before:absolute before:content-[''] before:z-0 before:-left-2 before:top-1/2 before:-translate-y-1/2 before:size-6 before:rounded-full before:bg-primary cursor-pointer">
                    <ArrowLongLeftIcon className="size-8 relative z-10 transition-all group-hover:-translate-x-1" />
                  </button>
                  <button className="group relative before:absolute before:content-[''] before:z-0 before:-right-2 before:top-1/2 before:-translate-y-1/2 before:size-6 before:rounded-full before:bg-primary cursor-pointer">
                    <ArrowLongRightIcon className="size-8 relative z-10 transition-all group-hover:translate-x-1" />
                  </button>
                </div>
              </>
            }
          />
        }
      />
    </div>
  );
};

export default TestimonialsSection;
