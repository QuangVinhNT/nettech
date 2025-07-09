import { ReactNode } from "react";

type Props = {
  child: ReactNode;
}
const Container = (props: Props) => {
  const {child} = props;
  return (
    <div className="2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto">
      {child}
    </div>
  )
}

export default Container
