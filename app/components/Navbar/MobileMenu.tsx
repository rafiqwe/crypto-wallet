import React from "react";
import Link from "next/link";

const MobileMenu = ({
  menuItems,
  setIsMenuOpen,
}: {
  menuItems: { title: string; href: string }[];
  setIsMenuOpen: (open: boolean) => void;
}) => {
  return (
    <div className="px-6 pb-6 md:hidden">
      <div className="h-px w-full mb-6" />
      <ul className="flex items-center w-full flex-col text-white/90 space-y-4">
        {menuItems.map((item) => (
          <li key={item.title} className="mobile-nav-item ">
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium  "
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li className="mobile-nav-item pt-4 w-full">
          <button className="w-full cursor-pointer rounded-2xl bg-white py-3 text-center text-sm font-bold text-black transition-transform active:scale-95">
            Connect Wallet
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
