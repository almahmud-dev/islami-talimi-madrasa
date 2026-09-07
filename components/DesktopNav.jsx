import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { navLinks } from "@/helper/data";

export default function DesktopNav() {
  return (
    <div className="hidden items-center justify-center gap-40 py-2.5 lg:flex w-full">
      {/* Nav links */}
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xl font-medium text-gray-700 transition-colors hover:text-brand-green"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Search + CTA */}
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded border border-gray-200 px-3 py-1.5">
          <input
            type="text"
            placeholder="সার্চ করুন..."
            className="w-32 bg-transparent text-sm outline-none placeholder:text-gray-400 lg:w-40"
          />
          <FiSearch className="text-gray-400" size={16} />
        </div>
        <Link
          href="/login"
          className="rounded bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
        >
          লগইন / রেজিস্ট্রেশন
        </Link>
      </div>
    </div>
  );
}