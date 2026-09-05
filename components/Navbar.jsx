import NavMenu from "./NavMenu";
import TopHeader from "./TopHeader";

export default function Navbar() {
  return (
    <>
      {/* Top identity bar */}
      <TopHeader />
      {/* Main nav row */}
      <div className="lg:sticky top-0 z-50 border-b border-gray-100">
        <NavMenu />
      </div>
    </>
  );
}
