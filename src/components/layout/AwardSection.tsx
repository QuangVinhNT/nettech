import Container from "../ui/Container";
import Award1 from '@/assets/award_1.png'
import Award2 from '@/assets/award_2.png'
import Award3 from '@/assets/award_3.png'
import Award4 from '@/assets/award_4.png'
import AwardSd1 from '@/assets/background_img/award_sd1.png'
import AwardSd2 from '@/assets/background_img/reason_sd2.png'
import { useState } from "react";

const tabs = [
  {
    label: 'Awards',
    values: [Award1, Award2, Award3, Award4]
  },  
  {
    label: 'Certificates',
    values: [Award1, Award2, Award3]
  },
  {
    label: 'Partners',
    values: [Award1, Award3, Award4]
  },
]

const AwardSection = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Awards');
  return ( 
    <div className="py-16 relative z-0 overflow-hidden">
      <img src={AwardSd1} alt="" className="absolute z-10 top-0 left-0 w-full h-full"/>
      <div className="absolute z-20 top-0 left-0 content-[''] w-full h-full bg-black/75"></div>
      <img src={AwardSd2} alt="" className="absolute z-30 -top-48 -right-24 h-[500px]"/>
      <Container 
        child={
          <div className="relative z-40">
            <ul className={`flex items-center gap-4 text-xl font-bold`}>
              {tabs.map((tab, idx) => (
                <li key={idx} className={`${selectedTab === tab.label && 'bg-gradient-to-r from-[#00BBE4] to-[#9AFFFF]'} px-8 py-2.5 rounded-full cursor-pointer`} onClick={() => setSelectedTab(tab.label)}>{tab.label}</li>
              ))}
            </ul>
            <div className="flex  bg-white/30 mt-8 rounded-2xl h-[300px] backdrop-blur-xl">
              {tabs.filter((tab) => tab.label === selectedTab)[0].values.map((tabValue, idx) => (
                <div key={idx} className="py-12 rounded-2xl cursor-pointer hover:bg-gradient-to-tr from-[#299FE5] via-[#9AFFFF] to-[#00BBE4]">
                  <img src={tabValue} alt="" className="w-full h-full object-contain scale-120"/>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  )
}

export default AwardSection
