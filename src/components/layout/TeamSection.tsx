import Container from "../ui/Container";
import SectionContainer from "../ui/SectionContainer";
import TeamCard from "../ui/TeamCard";
import Member1 from '@/assets/member_1.png';
import Member2 from '@/assets/member_2.png';
import Member3 from '@/assets/member_3.png';
import TeamSd2 from '@/assets/background_img/team_sd2.png'

const members = [
  {
    image: Member1,
    role: 'Project Manager',
    status: 'In publishing'
  },
  {
    image: Member2,
    role: 'Project Manager',
    status: 'In publishing'
  },
  {
    image: Member3,
    role: 'Project Manager',
    status: 'In publishing'
  },
];
const TeamSection = () => {
  return (
    <div className="bg-background relative z-0 before:absolute before:top-20 before:-left-16 before:content-[''] before:size-[500px] before:rounded-full before:bg-radial before:from-[#FFA700]/40 before:to-[rgba(0,0,0,0)] before:blur-2xl after:absolute after:-bottom-20 after:right-0 after:content-[''] after:size-[600px] after:rounded-full after:bg-radial after:from-[#2478FE]/40 after:to-[rgba(0,0,0,0)] after:blur-2xl overflow-hidden">
      <img src={TeamSd2} alt="" className="absolute z-10"/>
      <Container
        child={
          <SectionContainer
            label="Team"
            title="Our Outstanding Team Members with Smart Solutions"
            className="relative py-16 z-20"
            child={
              <div className="flex justify-center gap-8 mt-16">
                {members.map((member, idx) => (
                  <TeamCard key={idx} image={member.image} role={member.role} status={member.status} />
                ))}
              </div>
            }
          />
        }
      />
    </div>
  );
};

export default TeamSection;
