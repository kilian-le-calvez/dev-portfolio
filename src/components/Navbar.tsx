import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Drawer } from "./Drawer"; // Replace with your actual Drawer component path

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background shadow-md">
      <nav className="flex items-center justify-between px-8 py-2 mx-auto">
        <Link to="/" className="text-lg font-semibold text-foreground">
          Kilian Le Calvez : Portfolio
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-muted"
        >
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="image/photo-profile.jpeg"
            alt="Me"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-foreground">Kilian Le Calvez</p>
            <p className="text-sm text-muted-foreground">Developer</p>
          </div>
        </div>

        <nav className="space-y-2 mb-4">
          <Link
            to="/"
            className="block text-sm font-medium text-foreground hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/profile"
            className="block text-sm font-medium text-foreground hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
        </nav>

        <div className="text-sm space-y-1">
          <a
            href="mailto:kilianlecalvez.dev@gmail.com"
            className="text-muted-foreground block hover:underline"
          >
            kilianlecalvez.dev@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kilian-le-calvez-link/"
            className="text-blue-500 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </Drawer>
    </header>
  );
};
