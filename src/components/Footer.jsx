"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [currentYear,setCurrentYear] = useState(null)
  useEffect(()=>{
    setCurrentYear(new Date().getFullYear())
  },[])
    return (
      <footer className="bg-white dark:bg-gray-900 mt-8">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Company</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careerCard" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Support</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/helpCenter" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Legal</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/privacyPolicy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Subscribe to our newsletter</p>
              <form className="mt-4">
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Pawan Pandit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
