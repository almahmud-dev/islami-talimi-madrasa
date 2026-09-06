import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import TopHeader from "./TopHeader";

export default function Navbar() {
  return (
    <>
      {/* Top identity bar */}
      <TopHeader />
      {/* Main nav row */}
      <div className="hidden lg:flex lg:sticky top-0 z-50 border-b border-gray-100 bg-white/65 backdrop-blur shadow-x">
        <DesktopNav />
      </div>
      <div className="lg:hidden ">
        <MobileNav />
      </div>
    </>
  );
}
