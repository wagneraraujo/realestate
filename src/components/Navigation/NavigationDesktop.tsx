import { navigationLinks } from "@/features/utils/navigationLinks";
import Link from "next/link";

interface NavigationLinksProps {
  title: string;
  link: string;
  icon?: string;
}

export const NavigationDesktop = () => {
  return (
    <>
      <div className="w-full bg-slate-900 text-slate-300 h-1 p-8 flex justify-between items-center shadow-md	">
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

const NavigationLinks = ({ title, link, icon }: NavigationLinksProps) => {
  return (
    <Link href={link}>
      <div className="flex gap-1 items-center hover:text-cyan-600">
        {icon}
        {title}
      </div>
    </Link>
  );
};