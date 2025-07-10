import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import CaseStudyCard from "../ui/CaseStudyCard";
import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import CaseStudy1 from '@/assets/case_study_1.png';
import CaseStudy2 from '@/assets/case_study_2.png';
import CaseStudy3 from '@/assets/case_study_3.png';
import CaseStudySd1 from '@/assets/background_img/case_study_sd1.jpg';
import CaseStudySd2 from '@/assets/background_img/case_study_sd2.png';
import CaseStudySd3 from '@/assets/background_img/case_study_sd3.png';
import CaseStudySd4 from '@/assets/background_img/case_study_sd4.png';
import CaseStudySd5 from '@/assets/background_img/reason_sd2.png';

const caseStudies = [
  {
    thumbnail: CaseStudy1,
    title: 'A Smarter Bank: 80% Digitalization & 50% Less Manual Work with AI Data Automation',
    description: 'Background and challenge story  Manual Data Collection and Dashboard Creation The client’s data management process relied heavily on manual efforts to collect, clean, and integrate…'
  },
  {
    thumbnail: CaseStudy2,
    title: 'Scaling Innovation: 20% Faster Decision-Making With A Secure ODC Model',
    description: 'Background and Challenge Story The client needed to modernize its outdated Windows-based system into a scalable web-based platform to meet market demands and improve user…'
  },
  {
    thumbnail: CaseStudy3,
    title: '15% Increase in System Operational Performance By Enhancing Measurement Solution Applications',
    description: 'Background and Challenge Story  Initially, our client selected an Asian vendor for their ambitious SaaS project. However, challenges with quality and reliability led the company to…'
  }
];

const CaseStudiesSection = () => {
  return (
    <div className="relative z-0 overflow-hidden pt-16">
      <img src={CaseStudySd1} alt="" className="absolute z-10 top-32 left-1/2 -translate-x-1/2 scale-150" />
      <img src={CaseStudySd2} alt="" className="absolute z-20 w-1/2 block right-24" />
      <img src={CaseStudySd3} alt="" className="absolute z-10 h-full block object-cover right-0 top-0" />
      <img src={CaseStudySd4} alt="" className="absolute z-10 left-0 bottom-0" />
      <img src={CaseStudySd5} alt="" className="absolute z-10 h-1/3 block object-cover right-0 top-3/10" />
      <Container
        child={
          <SectionContainer
            label="Case studies"
            title="Successfull Stories Through Every Project"
            description="Each project we undertake is not just a task—it’s a journey toward innovation and impact. From ideation to implementation, our team is dedicated to delivering meaningful results. Behind every project lies a story of collaboration, challenges overcome, and goals achieved. These success stories are a testament to our commitment, expertise, and passion for excellence."
            align="left"
            className="py-16 relative z-30"
            child={
              <>
                <div className="flex gap-8 justify-center mt-60">
                  {caseStudies.map((caseStudy, idx) => (
                    <CaseStudyCard key={idx} thumbnail={caseStudy.thumbnail} title={caseStudy.title} description={caseStudy.description} className="nth-[2]:-translate-y-16" />
                  ))}
                </div>
                <Button
                  label="See all"
                  variant="secondary"
                  className="group mx-auto"
                  suffix={<ArrowUpRightIcon className="size-4 stroke-[2.5] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                />
              </>
            }
          />
        }
      />
    </div>
  );
};

export default CaseStudiesSection;
