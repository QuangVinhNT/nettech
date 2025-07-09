import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import Aia from '@/assets/aia.png';
import Bosch from '@/assets/bosch.png';
import Cjimc from '@/assets/cjimc.png';
import Honda from '@/assets/honda.png';
import Ibm from '@/assets/ibm.png';
import Line from '@/assets/line.png';
import OurClientsSD1 from '@/assets/background_img/our_clients_sd1.png'
import OurClientsSD2 from '@/assets/background_img/our_clients_sd2.png'
import OurClientsSD3 from '@/assets/background_img/our_clients_sd3.png'

const clients = [Aia, Bosch, Cjimc, Honda, Ibm, Line];

const OurClientsSection = () => {
  return (
    <div className="bg-background relative z-0">
      <img src={OurClientsSD1} alt="" className="absolute z-10 h-full"/>
      <img src={OurClientsSD2} alt="" className="absolute z-10"/>
      <img src={OurClientsSD3} alt="" className="absolute z-10 right-0 h-full"/>
      <Container
        child={
          <SectionContainer
            label="Trust by the industry leaders"
            title="Our Clients"
            child={
              <div className="flex justify-center items-center gap-12 mt-12">
                {clients.map((client, idx) => (
                  <img src={client} alt="client image" key={idx} className="h-16 object-cover nth-[5]:h-12 nth-[6]:h-12"/>
                ))}
              </div>
            }
            className="py-16 relative z-20"
          />
        }
      />
    </div>
  );
};

export default OurClientsSection;
