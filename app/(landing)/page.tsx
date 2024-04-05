"use client";

import * as React from "react";
import { Footer } from "@/app/(landing)/_components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useConvexAuth } from "convex/react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return router.push("/documents");
  }

  return (
    <div className="h-full bg-white dark:bg-[#1F1F1F] flex flex-col">
      <Navbar />
      <div className="grow px-2 py-2 mt-8">
        <h1 className="font-bold text-4xl md:text-6xl md:px-12 text-center">
          Unleash your productivity, one note at a time
        </h1>
        <h2 className="font-semibold text-xl md:text-2xl md:px-12 text-center mt-4">
          TeamWiki is an all-in-one workspace to capture, organize, and
          collaborate with your team.
        </h2>
        <Button className="mt-4 block mx-auto" size="lg">
          Get Started
        </Button>
        <Image
          src="/collaboration.png"
          width={500}
          height={500}
          alt="collaboration"
          className="mx-auto mt-4"
        />
      </div>
      <Footer />
    </div>
  );
}
