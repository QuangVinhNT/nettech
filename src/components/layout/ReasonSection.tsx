import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import ReasonCover from '@/assets/reason_cover.png';
import ProfitCard from '@/assets/profit_card.png';
import ReasonCard from "../ui/ReasonCard";
import ReasonSd1 from '@/assets/background_img/reason_sd1.png';
import ReasonSd2 from '@/assets/background_img/reason_sd2.png';

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
  return (
    <div className="bg-background relative z-0 pt-16">
      <img src={ReasonSd1} alt="" className="absolute z-10" />
      <img src={ReasonSd2} alt="" className="absolute z-10 size-96 object-cover bottom-72 -right-44" />
      <Container
        child={
          <SectionContainer
            label="Why choose us"
            title="Nettech - A Part of Your Strategic Move"
            description="We have carried out long-term strategic collaboration and partnership with well-known clients worldwide. Here are the reasons why Nettech is entrusted as a business partner by international enterprises."
            align="left"
            className="relative py-16 z-20"
            child={
              <>
                <img src={ProfitCard} alt="prf-card" className="absolute z-30 -top-10 right-12 h-48" />
                <img src={ReasonCover} alt="cover" className="absolute z-40 top-0 right-20 h-[500px]" />
                <div className="w-[40%]">
                  <Button
                    label="Contact us"
                    variant="primary"
                    className="group mx-auto mt-6"
                    suffix={<ArrowRightIcon className="size-4 stroke-[2.5] transition-all group-hover:translate-x-1" />}
                  />
                </div>
                <div className="mt-32 flex flex-wrap justify-center gap-8">
                  {reasons.map((reason, idx) => (
                    <ReasonCard
                      quantity={reason.quantity}
                      label={reason.label}
                      key={idx}
                    />
                  ))}
                </div>
              </>
            }
          />
        }
      />
    </div>
  );
};

export default ReasonSection;
