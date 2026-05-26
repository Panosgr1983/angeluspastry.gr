import { useState } from 'react';
import { Clock, MapPin, Menu, Phone, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { href: '#hero', label: 'Αρχική' },
  { href: '#freshness', label: 'Φρεσκάδα' },
  { href: '#products', label: 'Προϊόντα' },
  { href: '#about', label: 'Σχετικά' },
  { href: '#contact', label: 'Επικοινωνία' },
];

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const getHref = (href: string) => (isHomePage ? href : `/${href}`);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-emerald-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Καββαδία 3 & Αρχιμήδους, Γαλάτσι</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <a href="tel:+302114180215" className="hover:text-emerald-200 transition-colors">
                21 1418 0215
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Δευτ-Σάβ: 06:30-20:30 | Κυρ: 08:00-15:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="Angelus Pastry & Bakery"
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-emerald-800 tracking-wide">ANGELUS</h1>
              <p className="text-xs text-gray-500 tracking-widest">PASTRY & BAKERY</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={getHref(item.href)}
                className="text-gray-700 hover:text-emerald-700 transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Άνοιγμα μενού"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={getHref(item.href)}
              className="block w-full text-left py-3 text-gray-700 hover:text-emerald-700 font-medium border-b border-gray-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
