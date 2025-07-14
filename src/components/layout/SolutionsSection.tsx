import {ArrowRightIcon} from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import WordlClassITOutsourcing from '@/assets/wc_it_outsourcing.png';
import DigitalTransformation from '@/assets/digital_transformation.png';
import NettechSolutions from '@/assets/nettech_solutions.png';
import Model from '@/assets/model.png';
import SolutionCard from "../ui/SolutionCard";
import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";

const solutions = [
  {
    icon: WordlClassITOutsourcing,
    title: 'World-Class IT Outsourcing',
    description: 'Nettech’s IT Outsourcing solution is the key for innovative and forward-thinking businesses to keep pace with ever-changing IT infrastructure and requirements without any third-party involvement. We offer customized features in the process of developing your ultimate software!'
  },
  {
    icon: DigitalTransformation,
    title: 'Digital Transformation',
    description: 'We support employing top-advanced technologies to optimize the efficiency and cost of your business operation process. Nettech is here to provide comprehensive business process outsourcing to ease your management load in operation and increase work efficiency.'
  },
  {
    icon: NettechSolutions,
    title: 'Nettech Solution',
    description: 'Professional Advanced services of Nettech range from leveraging the effectiveness in management tasks such as identifying ID information, and facial recognition to Social Listening solutions for better insight analysis.'
  },
  {
    icon: Model,
    title: 'Model',
    description: 'Nettech offers various working methods for worldwide entrepreneurs to choose the most efficient, compatible, and cost-optimized for the desirable outcome.'
  },
];

const SolutionsSection = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  return (
    <div
      className="relative z-0 before:absolute before:top-36 before:-left-4 before:content-[''] before:size-[500px] before:rounded-full before:bg-radial before:from-[#FFA700]/40 before:to-[rgba(0,0,0,0)] before:blur-2xl after:absolute after:bottom-40 after:right-20 after:content-[''] after:size-[600px] after:rounded-full after:bg-radial after:from-[#2478FE]/40 after:to-[rgba(0,0,0,0)] after:blur-2xl"
      ref={ref}>
      <Container
        child={
          <SectionContainer
            label="Solutions"
            title="One-stop IT Solution"
            description="As a leading software development company, Nettech assists clients of all sizes and industries in implementing technology solutions with our one-stop solution, including IT Outsourcing, Digital Transformation, Nettech Solutions with diverse service models."
            child={
              <>
                <Button
                  label="Contact us"
                  variant="primary"
                  className="group mx-auto mt-6"
                  suffix={<ArrowRightIcon
                    className="size-4 stroke-[2.5] transition-all group-hover:translate-x-1"/>}
                />
                <div
                  className="flex flex-wrap justify-center gap-6 mt-8"
                >
                  {solutions.map((solution, idx) => (
                    <motion.div
                      key={idx}
                      initial={window.innerWidth > 1280 ? {
                        opacity: 0,
                        scale: idx === 1 ? 0 : 1,
                        x: idx === 0 ? 100 : (idx === 2 ? -100 : 0),
                        y: idx === 3 ? -100 : 0
                      } : false}
                      animate={window.innerWidth > 1280 && inView ? {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0
                      } : false}
                      transition={{duration: 0.3, delay: idx === 1 ? 0 : 0.3}}
                    >
                      <SolutionCard
                        icon={solution.icon}
                        title={solution.title}
                        description={solution.description}
                      />
                    </motion.div>
                  ))}
                </div>
              </>
            }
            className="py-16 relative z-20"
          />
        }
      />
    </div>
  );
};

export default SolutionsSection;
