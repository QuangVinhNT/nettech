import { ArrowLongDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

const HomeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return (
    <Container
      child={
        <div className="pb-32 relative z-20 mt-10 overflow-hidden" ref={ref}>
          <Button
            label="Contact Us"
            variant="secondary"
            className="group mx-auto"
            suffix={<ArrowUpRightIcon className="size-4 stroke-[2.5] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
          />
          <motion.h1
            className="text-7xl font-bold text-center mt-8 leading-22"
            initial={window.innerWidth > 1280 ? { opacity: 0, scale: 0 } : false}
            animate={inView && window.innerWidth > 1280 ? { opacity: 1, scale: 1 } : false}
            transition={{ duration: 0.3 }}
          >
            Ride the Next Wave of Digital Transformation
          </motion.h1>
          <motion.p
            className="mt-8 text-xl text-center max-w-3xl mx-auto font-bold text-gray"
            initial={window.innerWidth > 1280 ? { opacity: 0, scale: 0 } : false}
            animate={inView && window.innerWidth > 1280 ? { opacity: 1, scale: 1 } : false}
            transition={{ duration: 0.3 }}
          >
            We are dedicated to powering your business success with digital solutions and unwavering commitment, focusing on 4 compelling strengths: speed, commitment, customer centricity and crestivity
          </motion.p>
          <div className="flex justify-end items-center mt-8">
            <div className="px-6">
              <span className="block text-4xl font-bold mb-1">3000+</span>
              <span className="text-xl text-gray font-semibold">Certified Engineers</span>
            </div>
            <div className="h-8 w-0.5 bg-gray"></div>
            <div className="px-6">
              <span className="block text-4xl font-bold mb-1">300+</span>
              <span className="text-xl text-gray font-semibold">Global Clients</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-12 cursor-default">
            <span className="block text-sm -rotate-90">EXLORE NOW</span>
            <ArrowLongDownIcon className="size-8" />
          </div>
        </div>
      }
    />
  );
};

export default HomeSection;
