import Container from "../ui/Container";
import Logo from '@/assets/nettech_logo.png';

const footerItems = [
  {
    nav: 'World-class IT Outsourcing',
    subNavs: ['Custom Software Development', 'Software Maintenance', 'Legacy Migration', 'Testing Services']
  },
  {
    nav: 'Digital Transformation',
    subNavs: ['Cloud Professional Services', 'Data & Analytics', 'AI Consulting and Implementation', 'RPA Services', 'Low Code']
  },
  {
    nav: 'Nettech Solutions',
    subNavs: ['IoT Smart Device - CIVAMS Face', 'Nettech Social Listening', 'CMC Chatbox', 'C-ID Reader', 'C-CA', 'SOC']
  },
  {
    nav: 'Model',
    subNavs: ['Project-based', 'Staff Augmentation', 'Hybrid', 'Results Based']
  },
  {
    nav: 'About Us',
    subNavs: ['Nettech Global', 'Nettech Corporation', 'Company Profile']
  },
  {
    nav: 'Case Studies',
    subNavs: ['Customer Stories', 'Industry', 'Business Size']
  },
  {
    nav: 'Resources',
    subNavs: ['Blog', 'Ebooks & Whitepapers', 'News & Events']
  },
  {
    nav: 'Careers',
    subNavs: ['Careers']
  },
];

const Footer = () => {
  return (
    <Container
      child={
        <div className="pt-16">
          <div className="flex gap-16">
            <img src={Logo} alt="" className="w-1/8 object-contain" />
            <div className="flex-1 grid grid-cols-4 gap-16">
              {footerItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold mb-4">{item.nav}</h3>
                  <ul>
                    {item.subNavs.map((subnav, idx) => (
                      <li key={idx} className="mb-2">{subnav}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center pt-16 pb-8">
            <span className="text-sm text-gray">Copyright ©2025 Nguyen Tho Quang Vinh. Designed by Ngo Thu. All Rights Reserved.</span>
            <ul className="flex items-center">
              <li className="px-6 border-r border-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"></path>
                </svg>
              </li>
              <li className="px-6 border-r border-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </li>
              <li className="px-6">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Footer;
