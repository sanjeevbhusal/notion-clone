"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "../../components/navbar";
import { ChevronsLeft, Menu } from "lucide-react";
import { ElementRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

export default function DocumentsPage() {
  // TODO: get this value from local storage to respect user's decision
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const resizerRef = useRef<ElementRef<"div">>(null);

  console.log({ isDragging });

  useEffect(() => {
    if (resizerRef.current) {
      resizerRef.current.addEventListener("mousedown", () => {
        setIsDragging(true);
      });
    }

    function mouseMoveHandler(e: MouseEvent) {
      if (!isDragging || !sidebarRef.current) return;

      const MINIMUM_WIDTH = 250;
      const MAXIMUM_WIDTH = 500;

      const potentialWidth = e.clientX;

      console.log(potentialWidth);

      if (potentialWidth > MINIMUM_WIDTH && potentialWidth < MAXIMUM_WIDTH) {
        sidebarRef.current.style.width = `${potentialWidth}px`;
      }
    }

    function mouseUpHandler(e: MouseEvent) {
      setIsDragging(false);
    }

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [isDragging]);

  return (
    <div className="h-full flex flex-col ">
      <Navbar />
      <div className="flex grow">
        <aside
          className={cn("border-r px-2 py-4 relative group/sidebar", {
            hidden: !isSidebarOpen,
          })}
          ref={sidebarRef}
        >
          <div className="flex items-center justify-between">
            <Button className="" variant="outline">
              + New Document
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="cursor-pointer hidden group-hover/sidebar:block"
                  >
                    <ChevronsLeft onClick={() => setIsSidebarOpen(false)} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hide Sidebar</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="mt-4">
            <p className="text-slate-500 text-sm">Documents</p>
            <p className="mt-2">There are no documents available</p>
          </div>
          <Separator
            orientation="vertical"
            className={cn(
              "w-1 bg-gray-400 cursor-col-resize absolute right-0 top-0 hidden group-hover/sidebar:block"
            )}
            ref={resizerRef}
          />
        </aside>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={cn("px-2 py-4 cursor-pointer", {
                  hidden: isSidebarOpen,
                })}
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open Sidebar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="px-2 py-4 grow">Document Detail Page</div>
      </div>
    </div>
  );
}
