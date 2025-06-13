import { Heading } from "@/components/common/heading";
import Logo from "@/components/common/logo";
import { MaxWidthWrapper } from "@/components/common/max-width-wrapper";
import ShinyButton from "@/components/common/shiny-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertTriangle,
  ArrowDownWideNarrow,
  Briefcase,
  Check,
  ChevronsLeftRight,
  Ellipsis,
  FileText,
  Folder,
  LayoutDashboard,
  Search,
  Settings,
  Star,
  User,
  Users,
} from "lucide-react";

const LandingPage = () => {
  return (
    <>
      <section className="relative bg-brand-50 py-24 sm:py-32">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div className="space-y-3">
              <p className="text-sm text-brand-500 font-semibold italic">
                Monitor Logs in Real-Time
              </p>
              <Heading>
                <span>Built for Developers,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Logging That Speaks Your Language
                </span>
              </Heading>
            </div>

            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              Aegis makes it easy to monitor and respond to your SaaS events. Get instant alerts for{" "}
              <span className="font-semibold text-gray-700">errors, warnings, or custom logs</span>{" "}
              delivered to your team&apos;s tools — like Discord or Slack.
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Track events from any stack via simple API integration",
                "Real-time alerts for logs and errors",
                "Send notifications to Discord or Slack",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton
                href="/register"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-brand-50 pb-4 max-sm:hidden">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="flex min-h-[800px] w-full max-w-[1200px] bg-brand-25 border border-brand-25 text-black rounded-lg overflow-hidden shadow-xl">
                {/* mock sidebar */}
                <div className="w-[100px] lg:w-[300px] border-r border-brand-100 bg-white flex flex-col">
                  <div className="flex flex-col">
                    <div className="p-6 max-lg:mx-auto">
                      <Logo className="[&>span]:max-lg:hidden" />
                    </div>
                    <div className="w-full h-px bg-brand-100" />
                    <div className="px-6 py-4 space-y-2 max-lg:hidden">
                      <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide">
                        Projects
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <div className="flex items-center gap-2 justify-between w-full rounded-md border border-brand-200 text-brand-700 px-4 py-3 hover:bg-brand-50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-5 h-5" />
                              <span className="text-sm font-medium">Aegis</span>
                            </div>

                            <ChevronsLeftRight className="size-4 rotate-90" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="start"
                          className="min-w-[--radix-dropdown-menu-trigger-width] w-[var(--radix-dropdown-menu-trigger-width)]"
                        >
                          <DropdownMenuItem>
                            <div className="flex items-center gap-2 w-full rounded-md text-brand-400 p-1 hover:bg-brand-50 transition-colors cursor-pointer">
                              <Briefcase className="w-5 h-5 text-brand-400" />
                              <span className="text-sm font-medium">Convex</span>
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <div className="flex items-center gap-2 w-full rounded-md text-brand-400 p-1 hover:bg-brand-50 transition-colors cursor-pointer">
                              <Briefcase className="w-5 h-5 text-brand-400" />
                              <span className="text-sm font-medium">Vercel</span>
                            </div>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="w-full h-px bg-brand-100" />
                    <div className="px-6 py-4 space-y-2">
                      <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide max-lg:hidden">
                        HOME
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <div className="flex items-center gap-2 w-full rounded-md px-4 py-3 hover:bg-brand-50 transition-all duration-300 cursor-pointer">
                            <LayoutDashboard className="w-5 h-5 text-brand-700" />
                            <span className="text-sm font-medium text-brand-800 max-lg:hidden">
                              Overview
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2 w-full rounded-md px-4 py-3 bg-brand-600 text-white hover:bg-brand-700 transition-all duration-300 cursor-pointer">
                            <FileText className="w-5 h-5" />
                            <span className="text-sm font-medium max-lg:hidden">Logs</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2 w-full rounded-md px-4 py-3 hover:bg-brand-50 transition-all duration-300 cursor-pointer">
                            <Folder className="w-5 h-5 text-brand-700" />
                            <span className="text-sm font-medium text-brand-800 max-lg:hidden">
                              Documentation
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2 w-full rounded-md px-4 py-3 hover:bg-brand-50 transition-all duration-300 cursor-pointer">
                            <Users className="w-5 h-5 text-brand-700" />
                            <span className="text-sm font-medium text-brand-800 max-lg:hidden">
                              Team
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full h-px bg-brand-100" />
                    <div className="px-6 py-4 space-y-2">
                      <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide max-lg:hidden">
                        SETTINGS
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <div className="flex items-center gap-2 w-full rounded-md px-4 py-3 hover:bg-brand-50 transition-all duration-300 cursor-pointer">
                            <Settings className="w-5 h-5 text-brand-700" />
                            <span className="text-sm font-medium text-brand-800 max-lg:hidden">
                              Project Settings
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2 w-full rounded-md px-4 py-3 hover:bg-brand-50 transition-all duration-300 cursor-pointer">
                            <User className="w-5 h-5 text-brand-700" />
                            <span className="text-sm font-medium text-brand-800 max-lg:hidden">
                              Account
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto border-t border-brand-100 py-4 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 w-full">
                      <div className="size-8 rounded-full flex items-center justify-center border border-brand-100 max-lg:mx-auto">
                        <User className="size-5 " />
                      </div>
                      <p className="text-sm font-medium max-lg:hidden">Anthony Clement</p>
                    </div>
                    <Ellipsis className="size-4 rotate-90 max-lg:hidden" />
                  </div>
                </div>
                {/* mock main section */}
                <div className="flex-1 p-6 flex flex-col gap-10">
                  {/* Heading */}
                  <div className="space-y-2">
                    <p className="text-4xl font-semibold">Logs</p>
                    <p className="text-sm max-w-prose text-brand-500 font-medium italic">
                      Search and filter through your logs. Include <code>#</code> to search tags.
                    </p>
                  </div>

                  {/* Filters */}
                  <div className="w-full bg-white border border-brand-100 rounded-xl p-4 flex flex-col gap-4 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Search Input */}
                      <div className="flex flex-col">
                        <label className="mb-1 text-xs font-medium text-brand-500">
                          Search Logs
                        </label>
                        <div className="relative">
                          <input
                            disabled
                            readOnly
                            placeholder="e.g. User sign up failed or #auth"
                            className="w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-brand-100 bg-brand-25 text-brand-800 placeholder:text-brand-400 cursor-not-allowed"
                          />
                          <Search className="absolute left-3 top-3.5 size-4 text-brand-400" />
                        </div>
                      </div>

                      {/* Level Selector */}
                      <div className="flex flex-col">
                        <label className="mb-1 text-xs font-medium text-brand-500">Level</label>
                        <div className="relative">
                          <div className="flex items-center px-3 py-2.5 rounded-md border border-brand-100 bg-white text-sm text-brand-700">
                            <AlertTriangle className="size-4 mr-2 text-red-500" />
                            Error
                          </div>
                        </div>
                      </div>

                      {/* Sort By Selector */}
                      <div className="flex flex-col">
                        <label className="mb-1 text-xs font-medium text-brand-500">Sort by</label>
                        <div className="relative">
                          <div className="flex items-center px-3 py-2.5 rounded-md border border-brand-100 bg-white text-sm text-brand-700">
                            <ArrowDownWideNarrow className="size-4 mr-2 text-brand-400" />
                            Newest
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Logs Table */}
                  <div className="bg-white border border-brand-100 rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-brand-50 text-brand-600 text-xs uppercase font-semibold border-b border-brand-100">
                        <tr>
                          <th className="text-left px-4 py-3">Timestamp</th>
                          <th className="text-left px-4 py-3">Level</th>
                          <th className="text-left px-4 py-3">Message</th>
                          <th className="text-left px-4 py-3 max-lg:hidden">Tags</th>
                        </tr>
                      </thead>
                      <tbody className="text-brand-800">
                        {[...Array(10)].map((_, i) => (
                          <tr key={i} className="hover:bg-brand-25 transition-colors">
                            <td className="px-4 py-3 border-t border-brand-100">
                              2025-06-12 14:32:0{i}
                            </td>
                            <td className="px-4 py-3 border-t border-brand-100 text-red-600 font-semibold">
                              ERROR
                            </td>
                            <td className="px-4 py-3 border-t border-brand-100">
                              User failed to authenticate due to missing token
                            </td>
                            <td className="px-4 py-3 border-t border-brand-100 max-lg:hidden">
                              <span className="bg-brand-100 text-brand-700 px-2 py-1 rounded-md text-xs font-medium">
                                #auth
                              </span>
                              <span className="ml-2 bg-brand-100 text-brand-700 px-2 py-1 rounded-md text-xs font-medium">
                                #login
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-between items-center mt-4 text-sm text-brand-600">
                    <span>Showing 1–10 of 42 results</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 border border-brand-100 rounded-md bg-white hover:bg-brand-50 transition">
                        Previous
                      </button>
                      <button className="px-3 py-1 border border-brand-100 rounded-md bg-white hover:bg-brand-50 transition">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 bg-brand-50">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div className="text-center">
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Centralized Monitoring
            </h2>
            <Heading>Real-time visibility into your app’s stability</Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* Real-time alerts */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] p-8 sm:p-10">
                <p className="text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                  Real-time Alerts
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Instantly receive alerts for errors, logs, or system failures via your preferred
                  notification channels.
                </p>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
            </div>

            {/* Track All Events */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] p-8 sm:p-10">
                <p className="text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                  Track Any Event
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  From failed logins to payment issues, Aegis captures every important event in your
                  stack.
                </p>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>

            {/* Custom Metadata */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] p-8 sm:p-10">
                <p className="text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                  Rich Context with Metadata
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Attach useful metadata like user ID, environment, endpoint, or transaction ID to
                  every log entry.
                </p>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </div>

            {/* Easy Integration */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] p-8 sm:p-10">
                <p className="text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                  Easy to Integrate
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Use Aegis’s lightweight API or SDK to start monitoring in minutes — no complex
                  setup required.
                </p>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative py-24 sm:py-32 bg-brand-50">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Trusted by Developers & Teams
            </h2>
            <Heading className="text-center">Hear from our users</Heading>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* first testimonial */}
            <div className="flex flex-auto flex-col gap-6 bg-brand-25 p-8 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-brand-600 fill-brand-600" />
                ))}
              </div>

              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left">
                "Aegis transformed how we monitor errors. Real-time alerts help us resolve issues
                before our customers even notice."
              </p>

              <div className="flex gap-3 mt-4 justify-center lg:justify-start">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="font-semibold text-brand-900">Jesse Lin</p>
                  <p className="text-sm text-gray-600">Lead Backend Engineer</p>
                </div>
              </div>
            </div>

            {/* second testimonial */}
            <div className="flex flex-auto flex-col gap-6 bg-brand-25 p-8 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-brand-600 fill-brand-600" />
                ))}
              </div>

              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left">
                "With Aegis, integrating error tracking was effortless. The dashboard is intuitive
                and lets us attach custom metadata to pinpoint problems fast."
              </p>

              <div className="flex gap-3 mt-4 justify-center lg:justify-start">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="font-semibold text-brand-900">Maya Patel</p>
                  <p className="text-sm text-gray-600">SRE Team Lead</p>
                </div>
              </div>
            </div>
          </div>

          <ShinyButton
            href="/sign-up"
            className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Get Started with Aegis
          </ShinyButton>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
export default LandingPage;
