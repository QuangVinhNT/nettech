import { ReactNode } from "react";

type Props = {
  variant?: 'primary' | 'secondary';
  label: string;
  suffix?: ReactNode;
  className?: string;
}
const Button = (props: Props) => {
  const {variant, label, suffix, className} = props;
  return (
    <>
      {(variant && variant === 'secondary') ? (
        <div className={`bg-secondary/28 w-fit border border-secondary px-2 py-2 rounded-full cursor-pointer ${className}`}>
          <button className={'text-white text-xl bg-secondary px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer'}>{label}{suffix && suffix}</button>
        </div>
      ) : (
        <button className={`text-white text-xl flex items-center gap-2 ${className}`}>{label}{suffix && suffix}</button>
      )}
    </>
  )
}

export default Button
