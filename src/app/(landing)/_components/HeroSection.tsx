import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { IoChevronForwardOutline } from "react-icons/io5";

function HeroSection() {
  const router = useRouter();

  return (
    <div className="text-center space-y-6 mb-16">
      <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
        Plan Your Business <br />
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
          with Confidence
        </span>
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Create comprehensive business plans in 13 easy steps. From executive
        summary to financial projections, everything you need to succeed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button
          variant="shadow"
          onPress={() => router.push("/sign-up")}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium text-lg gap-2 px-8 py-6"
        >
          Start Planning Now
          <IoChevronForwardOutline className="w-5 h-5" />
        </Button>
        <Button
          variant="light"
          onPress={() => router.push("/sign-in")}
          className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-lg px-8 py-6"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
