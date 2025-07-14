import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import ReasonCover from '@/assets/reason_cover.png';
import ProfitCard from '@/assets/profit_card.png';
import ReasonCard from "../ui/ReasonCard";
import ReasonSd1 from '@/assets/background_img/reason_sd1.png';
import ReasonSd2 from '@/assets/background_img/reason_sd2.png';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const reasons = [
  {
    quantity: '31+',
    label: 'Years Of Experience'
  },
  {
    quantity: '3000+',
    label: 'Certified Engineers'
  },
  {
    quantity: '300+',
    label: 'Global Clients'
  },
  {
    quantity: '35+',
    label: 'Business Partners'
  },
  {
    quantity: '30+',
    label: 'Countries'
  },
];

const ReasonSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  return (
    <div className="relative z-0 py-16" ref={ref}>
      <img src={ReasonSd1} alt="" className="absolute z-10 h-full object-cover lg:object-contain" />
      <img src={ReasonSd2} alt="" className="absolute z-10 size-96 object-cover bottom-72 -right-44" />
      <Container
        child={
          <SectionContainer
            label="Why choose us"
            title="Nettech - A Part of Your Strategic Move"
            description="We have carried out long-term strategic collaboration and partnership with well-known clients worldwide. Here are the reasons why Nettech is entrusted as a business partner by international enterprises."
            align={`${window.innerWidth < 767 ? 'center' : 'left'}`}
            className="relative py-16 z-20"
            child={
              <>
                <img src={ProfitCard} alt="prf-card" className="absolute z-30 top-10 xl:-top-10 right-12 h-48 hidden lg:block" />
                <img src={ReasonCover} alt="cover" className="absolute z-40 top-20 xl:top-0 right-20 w-1/2 hidden lg:block" />
                <div className="lg:w-[40%]">
                  <Button
                    label="Contact us"
                    variant="primary"
                    className="group mx-auto mt-6"
                    suffix={<ArrowRightIcon className="size-4 stroke-[2.5] transition-all group-hover:translate-x-1" />}
                  />
                </div>
                <motion.div
                  className="mt-8 lg:mt-32 flex flex-wrap justify-center gap-8"
                  initial={window.innerWidth > 1280 ? { opacity: 0, x: -100 } : false}
                  animate={window.innerWidth > 1280 && inView ? { opacity: 1, x: 0 } : false}
                  transition={{ duration: 0.3 }}
                >
                  {reasons.map((reason, idx) => (
                    <ReasonCard
                      quantity={reason.quantity}
                      label={reason.label}
                      key={idx}
                    />
                  ))}
                </motion.div>
              </>
            }
          />
        }
      />
    </div>
  );
};

export default ReasonSection;
