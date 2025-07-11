import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  className?: string;
  placeholder: string;
  options: {label: string, value: string | number}[];
};
const Select = (props: Props) => {
  const { className, placeholder, options } = props;
  return (
    <div className={`relative h-fit ${className}`}>
      <select className={`bg-background h-fit p-4 rounded-xl text-lg appearance-none w-full outline-none`}>
        <option value="" hidden>{placeholder}</option>
        {options.map((opt, idx) => (
          <option value={opt.value} key={idx}>{opt.label}</option>
        ))}
      </select>
      <ChevronDownIcon className="size-5 stroke-[2.5] absolute top-1/2 -translate-y-1/2 right-4"/>
    </div>
  );
};

export default Select;
