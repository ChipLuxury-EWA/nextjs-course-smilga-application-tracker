import { UserButton } from "@clerk/nextjs";
import LinksDropdown from "./LinksDropdown";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="bg-muted py-4 px-4 flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-x-4">
        <UserButton />
        <ThemeToggle />
      </div>
    </nav>
  );
};
export default NavBar;
