"use client";

import Link from "next/link";
import { Menu, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-md items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Footprints className="h-5 w-5 text-emerald-600" />
          <span className="font-semibold tracking-tight">fuess-mobil</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <NavigationMenu orientation="vertical">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/#leistungen" className="px-3 py-2 text-sm">
                    Leistungen
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/#preise" className="px-3 py-2 text-sm">
                    Preise
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/#kontakt" className="px-3 py-2 text-sm">
                    Kontakt
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button
                  asChild
                  size="sm"
                  className="ml-2 bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="mailto:verena.gufler@fuess-mobil.ch?subject=Termin%20anfrage">
                    Termin anfragen
                  </Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation (Sheet) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menü öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Footprints className="h-5 w-5 text-emerald-600" />
                fuess-mobil
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 grid gap-2">
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/#leistungen">Leistungen</Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/#preise">Preise</Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/#kontakt">Kontakt</Link>
              </Button>
              <Button
                asChild
                className="mt-2 bg-emerald-600 hover:bg-emerald-700"
              >
                <Link href="mailto:verena.gufler@fuess-mobil.ch?subject=Termin%20anfrage">
                  Termin anfragen
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
