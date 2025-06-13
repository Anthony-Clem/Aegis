import Logo from "@/components/common/logo";
import { MaxWidthWrapper } from "@/components/common/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <header className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          <Link
            to="/pricing"
            className={buttonVariants({
              variant: "ghost",
              className: "max-md:hidden",
            })}
          >
            Pricing
          </Link>
          <div className="h-8 w-px bg-gray-200 max-md:hidden" />
          <div className="flex gap-2">
            <Link
              to="/auth/login"
              className={buttonVariants({
                variant: "outline",
              })}
            >
              Login
            </Link>
            <Link to="/auth/register" className={buttonVariants()}>
              Register
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
export default LandingHeader;
