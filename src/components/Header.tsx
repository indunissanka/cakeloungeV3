import React from 'react';
    import { Phone, MapPin, Clock, Facebook } from 'lucide-react';
    import { Logo } from './Logo';

    export function Header() {
      return (
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <Logo />
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span>+94 72 368 4367</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span>36/3 Jambugasmulla Mawatha, Nugegoda</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <a
                  href="https://www.facebook.com/thecakelounge.tcl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-pink-600 transition-colors"
                >
                  <Facebook className="h-4 w-4 text-gray-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      );
    }
