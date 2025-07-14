import Logo from '@/assets/nettech_logo.png';
import {Bars3Icon, ChevronDownIcon} from '@heroicons/react/24/outline';
import Container from "../ui/Container";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

const Header = () => {
  const [isShowNavBar, setIsShowNavBar] = useState<boolean>(false)
  return (
    <Container child={
      <div className="relative z-30 flex justify-between items-center py-2">
        <img src={Logo} alt="" className="h-14"/>
        <ul
          className={`flex flex-col lg:flex-row fixed lg:relative top-0 right-0 ${isShowNavBar ? 'translate-x-4' : 'translate-x-[110%]'} lg:translate-x-0 bg-white lg:bg-transparent text-background lg:text-white py-4 pl-20 pr-12 lg:p-0 h-dvh lg:h-auto text-lg font-medium gap-12 transition-all`}>
          <li className="flex items-center gap-1 cursor-pointer hover:text-primary transition-all">
            <span>Services</span>
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-primary transition-all">
            <span>Case Studies</span>
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-primary transition-all">
            <span>Resources</span>
          </li>
          <li className="cursor-pointer hover:text-primary transition-all">
            <span>Careers</span>
          </li>
          <li className="cursor-pointer hover:text-primary transition-all">
            <span>About Us</span>
          </li>
          <li className={'absolute left-3 top-3 block lg:hidden'}>
            <XMarkIcon className={'size-8'} onClick={() => {
              setIsShowNavBar(false)
              document.body.style.overflow = ''
            }}/>
          </li>
        </ul>
        <div className={'flex items-center gap-4'}>
          <Bars3Icon
            className={'size-8 lg:hidden'}
            onClick={() => {
              setIsShowNavBar(true)
              document.body.style.overflow = 'hidden'
            }}/>
          <div className="flex items-center gap-2 bg-secondary/28 border-1 border-secondary px-4 py-1.5 rounded-full">
            <span>EN</span>
            <ChevronDownIcon className="size-4"/>
          </div>
        </div>
      </div>
    }/>
  );
};

export default Header;
