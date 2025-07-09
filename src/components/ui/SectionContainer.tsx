import { ReactNode } from "react";

type Props = {
  label?: string;
  title: string;
  description?: string;
  child: ReactNode;
  className?: string;
};
const SectionContainer = (props: Props) => {
  const { label, title, description, className, child } = props;
  return (
    <div className={`${className}`}>
      {label && (
        <div className="border border-primary w-fit mx-auto rounded-full px-8 mb-8">
          <span className="text-sm relative before:content-[''] before:w-2 before:h-2 before:bg-primary before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">{label}</span>
        </div>
      )}
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      {description && (
        <p>{description}</p>
      )}
      {child}
    </div>
  );
};

export default SectionContainer;
