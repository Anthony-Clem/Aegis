import { cn } from "@/lib/utils";
import { BugOff } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <BugOff className="text-brand-500" />
      <span className="font-semibold italic text-lg text-black">Aegis</span>
    </Link>
  );
};
export default Logo;
