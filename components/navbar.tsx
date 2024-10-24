"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import { Search, ShoppingCart, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CategoryNav } from "@/components/category-nav";
import { useDispatch } from "react-redux";
import { toggleCart } from "@/lib/store/slices/cartSlice";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <CategoryNav />
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">ModernShop</span>
        </Link>

        <div className="hidden md:flex md:flex-1">
          <CategoryNav />
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => dispatch(toggleCart())}>
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}