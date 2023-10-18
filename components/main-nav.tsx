"use client";

import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { Dictionaries, Navbar } from "@/i18n/dictionaries/types";
import { getLinks, getSection } from "@/lib/utils";

interface MainNavProps {
  dict: Dictionaries;
}

export default function MainNav({ dict }: MainNavProps) {
  const router = useRouter();

  const sections = getSection(dict.navbar);
  const links = getLinks(dict.navbar);

  return (
    <header className="fixed top-0 z-10 w-full h-20 px-5 flex justify-between items-center align-middle shadow-lg bg-neutral-50 dark:bg-neutral-900">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size={"icon"}
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="w-full flex flex-col justify-between"
        >
          <div>
            <SheetHeader>
              <SheetTitle>{dict.navbar.welcome}</SheetTitle>
            </SheetHeader>
            <NavigationMenu className="m-auto mt-4">
              <NavigationMenuList className="flex flex-col">
                {sections.map((section) => (
                  <NavigationMenuItem key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {section.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="w-full flex justify-around">
            <TooltipProvider delayDuration={200}>
              {links.map((link) => (
                <Tooltip key={link.link}>
                  <TooltipTrigger>
                    <Link
                      href={link.link}
                      target="_blank"
                    >
                      {link.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="font-montserrat font-bold text-transparent max-sm:text-2xl sm:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-tr from-purple-400 to-blue-600 dark:from-purple-500 dark:to-blue-800">
        Luan Rodrigues{" "}
      </h1>
      <ThemeToggle dict={dict}/>
    </header>
  );
}
