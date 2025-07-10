import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

type Props = {
  thumbnail: string;
  title: string;
  description: string;
  className?: string;
};
const CaseStudyCard = (props: Props) => {
  const { thumbnail, title, description, className } = props;
  return (
    <div className={`bg-[#1A2D4766] p-8 rounded-3xl backdrop-blur-sm ${className}`}>
      <img src={thumbnail} alt="thumbnail" className="block w-[375px] h-[250px] object-cover rounded-3xl mx-auto"/>
      <h2 className="my-4 text-xl font-bold text-center">{title}</h2>
      <p className="text-center font-light">{description}</p>
      <Button
        label="Learn more"
        variant="primary"
        className="group mx-auto mt-6 text-base! py-2! px-4!"
        suffix={<ArrowRightIcon className="size-3.5 stroke-[2.5] transition-all group-hover:translate-x-1" />}
      />
    </div>
  );
};

export default CaseStudyCard;
