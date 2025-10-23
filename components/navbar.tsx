"use client";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MotionTransition from "./transition-components";

function Navbar() {
  const router = usePathname();

  return (
    <MotionTransition
      position="top"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto bottom-5"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-blue-600/50 ${router === item.link ? "bg-blue-600/50 z-999"  : ""
                }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
}

export default Navbar;
