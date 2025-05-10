import { socialNetworks } from "@/data";
import MotionTransition from "./transition-components";
import Link from "next/link";

function Header() {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-0 px-10 md:top-2"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-3xl font-bold text-center md:text-left hover:text-gray-400/100 transition-all duration-550">
              Sebastián Reina
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-gray-400/100"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
}
export default Header;
