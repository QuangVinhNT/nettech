import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import ContactSd1 from '@/assets/background_img/contact_sd1.png';
import ContactSd2 from '@/assets/background_img/contact_sd2.png';
import ContactSd3 from '@/assets/background_img/contact_sd3.png';
import Select from "../ui/SelectComponent";
import Input from "../ui/InputComponent";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const purposes = [
  {
    label: 'Purpose 1',
    value: '1'
  },
  {
    label: 'Purpose 2',
    value: '2'
  },
  {
    label: 'Purpose 3',
    value: '3'
  },
];

const industries = [
  {
    label: 'Industry 1',
    value: '1'
  },
  {
    label: 'Industry 2',
    value: '2'
  },
  {
    label: 'Industry 3',
    value: '3'
  },
];

const times = [
  {
    label: 'Time 1',
    value: '1'
  },
  {
    label: 'Time 2',
    value: '2'
  },
  {
    label: 'Time 3',
    value: '3'
  },
];

const ContactSection = () => {
  return (
    <div className="overflow-hidden relative z-0 after:absolute after:-top-8 after:-right-20 after:content-[''] after:size-[200px] after:rounded-full after:bg-radial after:from-[#2478FE]/60 after:to-[rgba(0,0,0,0)] after:blur-2xl">
      <img src={ContactSd1} alt="" className="absolute z-10"/>
      <img src={ContactSd3} alt="" className="absolute z-10 top-1/2 -translate-y-1/2 h-11/12 opacity-50"/>
      <Container
        child={
          <SectionContainer
            title="Maximize Your ROI in the Cloud! Let's Chat!"
            className="py-16 relative z-20"
            child={
              <div className="flex gap-16 mt-16">
                <img src={ContactSd2} alt="" className="w-1/3 object-contain hidden lg:block" />
                <form action="" className="bg-white/10 flex-1 h-fit rounded-3xl p-8 flex flex-col gap-4">
                  <Select placeholder="Purpose*" options={purposes} />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Input placeholder="First name*" />
                    <Input placeholder="Last name*" />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Input placeholder="Email*" />
                    <Input placeholder="Phone number*" />
                  </div>
                  <Input placeholder="Company name*" />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Input placeholder="Job title*" />
                    <Select placeholder="Industry*" options={industries} />
                  </div>
                  <Input placeholder="Country/Region*" />
                  <Textarea placeholder="Message*" />
                  <Input placeholder="Book Meeting*" />
                  <Select options={times} placeholder="Time (GMT +7)*" />
                  <Button
                    label="Next"
                    variant="primary"
                    className="group w-full flex justify-center lg:w-fit mt-4 text-base! py-2! px-12!"
                    suffix={<ArrowRightIcon className="size-3.5 stroke-[2.5] transition-all group-hover:translate-x-1" />}
                  />
                </form>
              </div>
            }
          />
        }
      />
    </div>
  );
};

export default ContactSection;
