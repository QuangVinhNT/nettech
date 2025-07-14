import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import Aia from '@/assets/aia.png';
import Bosch from '@/assets/bosch.png';
import Cjimc from '@/assets/cjimc.png';
import Honda from '@/assets/honda.png';
import Ibm from '@/assets/ibm.png';
import Line from '@/assets/line.png';
import OurClientsSD1 from '@/assets/background_img/our_clients_sd1.png';
import OurClientsSD2 from '@/assets/background_img/our_clients_sd2.png';
import OurClientsSD3 from '@/assets/background_img/our_clients_sd3.png';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const clients = [Aia, Bosch, Cjimc, Honda, Ibm, Line];

const OurClientsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  return (
    <div className="relative z-0" ref={ref}>
      <img src={OurClientsSD1} alt="" className="absolute z-10 h-full" />
      <img src={OurClientsSD2} alt="" className="absolute z-10 h-full" />
      <img src={OurClientsSD3} alt="" className="absolute z-10 right-0 h-full" />
      <Container
        child={
          <SectionContainer
            label="Trust by the industry leaders"
            title="Our Clients"
            child={
              <motion.div
                className="flex flex-wrap justify-center items-center gap-12 mt-12"
                initial={window.innerWidth > 1280 ? { opacity: 0, y: 100 } : false}
                animate={window.innerWidth > 1280 && inView ? { opacity: 1, y: 0 } : false}
                transition={{ duration: 0.3 }}
              >
                {clients.map((client, idx) => (
                  <img src={client} alt="client image" key={idx} className="h-16 object-cover nth-[5]:h-12 nth-[6]:h-12" />
                ))}
              </motion.div>
            }
            className="py-16 relative z-20"
          />
        }
      />
    </div>
  );
};

export default OurClientsSection;
