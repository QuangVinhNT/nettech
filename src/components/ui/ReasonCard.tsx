type Props = {
  quantity: string;
  label: string;
}
const ReasonCard = (props: Props) => {
  const {quantity, label} = props;
  return (
    <div className="w-[420px] py-10 bg-white/4 backdrop-blur-sm rounded-3xl border border-white/26 relative before:absolute before:content-[''] before:size-4 before:bg-secondary before:rounded-full before:top-1/2 before:left-8 before:-translate-y-1/2">
      <span className="block text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary from-[30%] via-white via-[50%] to-white to-[100%]">{quantity}</span>
      <span className="block text-center text-xl font-semibold mt-2">{label}</span>
    </div>
  )
}

export default ReasonCard
