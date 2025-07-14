import PhoneIcon from '@/assets/phone_icon.png';
import InstagramIcon from '@/assets/instagram_icon.png';
import FacebookIcon from '@/assets/facebook_icon.png';
import TeamSd1 from '@/assets/background_img/team_sd1.png';
type Props = {
  image: string;
  role: string;
  status: string;
};
const TeamCard = (props: Props) => {
  const { image, role, status } = props;
  return (
    <div className="bg-white/10 lg:w-[400px] p-10 relative overflow-hidden">
      <img src={image} alt="img" className="h-[420px] object-cover block mx-auto relative z-30" />
      <span className="block text-center mt-8 text-xl font-bold">{role}</span>
      <span className="block text-center mt-2 text-xl">{status}</span>
      <div className="flex justify-center gap-4 mt-4">
        <img src={PhoneIcon} alt="icon" className="size-8 object-cover" />
        <img src={InstagramIcon} alt="icon" className="size-8 object-cover" />
        <img src={FacebookIcon} alt="icon" className="size-8 object-cover" />
      </div>
      <img src={TeamSd1} alt="" className="absolute z-20 top-0 left-0"/>
    </div>
  );
};

export default TeamCard;
