import Link from "next/link";
import React from "react";

const DesktopMenu = ({
  menuItems,
}: {
  menuItems: { title: string; href: string }[];
}) => {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      {menuItems.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
