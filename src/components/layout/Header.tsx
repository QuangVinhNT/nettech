import Logo from '@/assets/nettech_logo.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Container from "../ui/Container";

const Header = () => {
  return (
    <Container child={
      <div className="relative z-20 flex justify-between items-center py-2">
        <img src={Logo} alt="" className="h-14" />
        <ul className="flex text-lg font-medium gap-8">
          <li className="flex items-center gap-1 cursor-pointer hover:text-primary transition-all">
            <span>Services</span>
            <ChevronDownIcon className="size-4" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-primary transition-all">
            <span>Case Studies</span>
            <ChevronDownIcon className="size-4" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-primary transition-all">
            <span>Resources</span>
            <ChevronDownIcon className="size-4" />
          </li>
          <li className="cursor-pointer hover:text-primary transition-all">
            <span>Careers</span>
          </li>
          <li className="cursor-pointer hover:text-primary transition-all">
            <span>About Us</span>
          </li>
        </ul>
        <div className="flex items-center gap-2 bg-secondary/28 border-1 border-secondary px-4 py-1.5 rounded-full">
          <span>EN</span>
          <ChevronDownIcon className="size-4" />
        </div>
      </div>
    } />
  );
};

export default Header;
