"use client";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn.jsx";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl hover:text-2xl font-bold text-gray-800">
            Blog
          </Link>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.NAJkPJjVI9EAs9nDUknvngHaEy&pid=Api&P=0&h=220"
            alt="blog"
            height={50}
            width={50}
            className="hover:h-9 w-8"
          />
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            {session ? (
              <Button className="mx-1" variant="outline" onClick={() => signOut()}>
                LogOut
              </Button>
            ) : (
              <Button className="mx-1" variant="outline" onClick={() => signIn()}>
                SignIn
              </Button>
            )}
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 dark:bg-slate-600 ">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="text-center">Pawan Blog</SheetTitle>
                <SheetHeader className="flex justify-between items-end mt-2 ">
                  <ModeToggle smallIcon />
                </SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col gap-5 dark:text-white">
                    <Link href="/" className="text-gray-700 dark:text-white">
                      Home
                    </Link>
                    <Link href="/about" className="text-gray-700 dark:text-white">
                      About
                    </Link>
                    <Link href="/blog" className="text-gray-700 dark:text-white">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-gray-700 dark:text-white">
                      Contact
                    </Link>
                    <div className="flex space-x-2 gap-12">
                      {session ? (
                        <Button variant="outline" onClick={() => signOut()}>
                          LogOut
                        </Button>
                      ) : (
                        <Button variant="outline" onClick={() => signIn()}>
                          SignIn
                        </Button>
                      )}
                    </div>
                  </div>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
