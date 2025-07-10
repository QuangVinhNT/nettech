type Props = {
  placeholder: string;
  className?: string;
}
const Input = (props: Props) => {
  const {placeholder, className} = props
  return (
    <input type="text" placeholder={placeholder} className={`${className} bg-background p-4 rounded-xl text-lg placeholder-white`}/>
  );
};

export default Input;
