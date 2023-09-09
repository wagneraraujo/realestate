import Link from "next/link";
import { NavigationLinks } from "./navigationLinks";
import { navigationLinks } from "features/utils/navigationLinks";

export const NavigationDesktop = () => {
  return (
    <>
      <div className="w-full bg-slate-900 text-slate-300 h-1 p-8 flex justify-between items-center shadow-md max-lg:hidden">
        <div className="logo uppercase font-bold font-mono text-2xl">
          Imobiliaria
        </div>
        <div className="linksmenu">
          <nav>
            <ul className="flex gap-6 items-center">
              {navigationLinks.map((item) => (
                <NavigationLinks key={item.title} {...item} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
