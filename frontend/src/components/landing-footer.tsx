import { MaxWidthWrapper } from "./common/max-width-wrapper";

const LandingFooter = () => {
  return (
    <footer className="bg-brand-50 py-12">
      <MaxWidthWrapper className="flex flex-col-reverse items-center justify-between gap-8 sm:flex-row">
        {/* Left side: Branding and copyright */}
        <div className="text-center sm:text-left text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Aegis. All rights reserved.
        </div>

        {/* Right side: Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-brand-600">
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
        </nav>
      </MaxWidthWrapper>
    </footer>
  );
};
export default LandingFooter;
