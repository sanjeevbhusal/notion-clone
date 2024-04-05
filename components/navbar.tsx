import { Logo } from "../app/(landing)/_components/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Loader2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  const { setTheme } = useTheme();
  const { isLoading, isAuthenticated } = useConvexAuth();

  let authenticationInformation = (
    <>
      <SignInButton mode="modal" afterSignInUrl="/documents">
        <Button variant="ghost" size="sm">
          Login
        </Button>
      </SignInButton>
      <SignInButton mode="modal" afterSignInUrl="/documents">
        <Button size="sm">Create account</Button>
      </SignInButton>
    </>
  );

  if (isLoading) {
    authenticationInformation = <Loader2 className="animate-spin" />;
  }

  if (isAuthenticated) {
    authenticationInformation = <UserButton afterSignOutUrl="/" />;
  }

  return (
    <nav className="flex justify-between items-center px-2 py-2 border-b border-black dark:border-white ">
      <Logo />
      <div className="flex gap-4 items-center">
        {authenticationInformation}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export { Navbar };
