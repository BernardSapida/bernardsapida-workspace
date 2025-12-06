import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { IoChevronForwardOutline } from "react-icons/io5";

function CTASection() {
  const router = useRouter();

  return (
    <div className="mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-12 text-center text-white space-y-6">
      <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
      <p className="text-blue-100 text-lg max-w-2xl mx-auto">
        Create your first business plan today and take the first step toward
        success.
      </p>
      <Button
        size="lg"
        className="bg-white text-blue-600 hover:bg-blue-50 font-semibold gap-2"
        onPress={() => router.push("/sign-in")}
      >
        Create Your Plan
        <IoChevronForwardOutline className="w-5 h-5" />
      </Button>
    </div>
  );
}

export default CTASection;
