import React from "react";
import Link from "next/link";

export default function ContactFooter() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-10 mt-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left side — text intro */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">Let’s Work Together</h2>
          <p className="text-gray-400 max-w-md">
            Have a project or collaboration in mind? I’d love to hear from you.
            Whether it's a website, app, or creative idea — let’s build
            something meaningful.
          </p>
        </div>

        {/* Right side — contact info */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <Link
            href="mailto:eirikmccall@gmail.com"
            className="hover:text-white transition-colors"
          >
            eirikmccall@gmail.com
          </Link>
          <Link
            href="https://wa.me/61488835366"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp: +61 488 835 366
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Eirik McCall. All rights reserved.
      </div>
    </footer>
  );
}
