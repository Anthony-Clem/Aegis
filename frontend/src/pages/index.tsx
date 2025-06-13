import type { RouteObject } from "react-router-dom";
import LandingPage from "./landing/landing-page";
import LandingLayout from "./landing/landing-layout";
import PricingPage from "./landing/pricing-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
    ],
  },
];
