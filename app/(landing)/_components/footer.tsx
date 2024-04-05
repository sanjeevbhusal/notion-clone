import { Heart } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

function Footer() {
  return (
    <div className="px-2 py-2 border-t border-black dark:border-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <Link href="/">
            <h4 className="hover:underline">Terms and Conditions</h4>
          </Link>
          <Link href="/">
            <h4 className="hover:underline">Privacy Policy</h4>
          </Link>
        </div>
      </div>
      <h3 className="text-center mt-4">
        Made with <Heart color="#d91717" className="inline fill-red-500" /> by
        <a
          href="https://www.linkedin.com/in/sanjeevbhusal/"
          className="ml-1 underline text-blue-500"
          target="_blank"
        >
          Sanjeev Bhusal
        </a>
      </h3>
    </div>
  );
}

export { Footer };
