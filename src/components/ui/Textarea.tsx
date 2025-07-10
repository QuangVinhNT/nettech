type Props = {
  placeholder: string;
  className?: string;
}
const Textarea = (props: Props) => {
  const {placeholder, className} = props;
  return (
    <textarea name="" id="" rows={4} className={`bg-background p-4 rounded-2xl text-lg placeholder:text-white ${className}`} placeholder={placeholder}></textarea>
  );
};

export default Textarea;
