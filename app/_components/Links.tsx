import { Layers, AppWindow, AreaChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const links: NavLink[] = [
  {
    href: "/add-job",
    label: "Add job",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: <AppWindow />,
  },
  {
    href: "/stats",
    label: "Stats",
    icon: <AreaChart />,
  },
];

export const DynamicLinksList = () => {
  const pathName = usePathname();

  return links.map((link) => {
    return (
      <Button asChild key={link.href} variant={pathName === link.href ? "default" : "link"}>
        <Link href={link.href} className="flex">
          <div className="basis-1/4">{link.icon}</div> <span className="basis-3/4 capitalize">{link.label}</span>
        </Link>
      </Button>
    );
  });
};
