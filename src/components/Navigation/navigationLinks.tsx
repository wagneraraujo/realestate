import Link from "next/link";

interface NavigationLinksProps {
  title: string;
  link: string;
  icon?: string;
}

export const NavigationLinks = ({
  title,
  link,
  icon,
}: NavigationLinksProps) => {
  return (
    <Link href={link}>
      <div className="flex gap-1 items-center hover:text-cyan-600">
        {icon}
        {title}
      </div>
    </Link>
  );
};
