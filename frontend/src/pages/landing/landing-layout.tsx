import { Outlet } from "react-router-dom";
import LandingHeader from "../../components/landing-header";
import LandingFooter from "@/components/landing-footer";

const LandingLayout = () => {
  return (
    <main className="min-h-screen bg-brand-50 flex flex-col">
      <LandingHeader />
      <div>
        <Outlet />
      </div>
      <LandingFooter />
    </main>
  );
};
export default LandingLayout;
