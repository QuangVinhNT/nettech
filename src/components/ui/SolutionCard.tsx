type Props = {
  icon: string;
  title: string;
  description: string;
};
const SolutionCard = (props: Props) => {
  const { icon, title, description } = props;
  return (
    <div className="bg-white/24 w-[333px] h-[383px] rounded-2xl p-8">
      <img src={icon} alt="icon" className="block mx-auto size-12 object-contain"/>
      <h2 className="text-xl font-semibold my-2 text-center">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
};

export default SolutionCard;
