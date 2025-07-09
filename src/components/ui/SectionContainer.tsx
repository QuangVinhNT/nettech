import { ReactNode } from "react";

type Props = {
  label?: string;
  title: string;
  description?: string;
  child: ReactNode;
  align?: 'center' | 'left';
  className?: string;
};
const SectionContainer = (props: Props) => {
  const { label, title, description, className, child, align } = props;
  return (
    <div className={`${className}`}>
      <div className={`${align === 'left' && 'w-[40%]'} `}>
        {label && (
          <div className="border border-primary w-fit mx-auto rounded-full px-8 mb-8 shadow-[0_0_20px_rgba(154,255,255,0.3)]">
            <span className="text-sm relative before:content-[''] before:size-2 before:bg-primary before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">{label}</span>
          </div>
        )}
        <h1 className={`text-4xl font-bold ${(align && align === 'left') ? 'text-left' : 'text-center'}`}>{title}</h1>
        {description && (
          <p className={`${(align && align === 'left') ? 'text-left text-gray' : 'text-center leading-10'} mt-8 text-xl shadow-lg`}>{description}</p>
        )}
      </div>
      {child}
    </div>
  );
};

export default SectionContainer;
