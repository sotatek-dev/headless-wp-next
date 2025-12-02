'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from '../navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  const t = useTranslations('header');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
      id="header"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div
          className="text-2xl font-bold text-orange-300 cursor-pointer transition-transform duration-300 hover:scale-105"
          id="brand-name"
          onClick={() => router.push('/')}
        >
          <Image src="/images/logo.png" alt="Sunwell Logo" width={100} height={100} />
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <nav className="flex gap-8 items-center">
            <a
              href="#home"
              className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 relative py-2 px-0 group"
              id="nav-home"
            >
              {t('home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 relative py-2 px-0 group"
              id="nav-about"
            >
              {t('about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#jobs"
              className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 relative py-2 px-0 group"
              id="nav-jobs"
            >
              {t('jobs')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 relative py-2 px-0 group"
              id="nav-services"
            >
              {t('services')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#apply"
              className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 relative py-2 px-0 group"
              id="nav-contact"
            >
              {t('contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none transition-colors duration-300 hover:bg-gray-100 rounded-md"
            aria-label="Toggle mobile menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-300 ${isMobileMenuOpen ? 'text-orange-300' : 'text-gray-600'}`}
            >
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/98 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 py-2 border-b border-gray-100"
          >
            {t('home')}
          </a>
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 py-2 border-b border-gray-100"
          >
            {t('about')}
          </a>
          <a
            href="#jobs"
            onClick={closeMobileMenu}
            className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 py-2 border-b border-gray-100"
          >
            {t('jobs')}
          </a>
          <a
            href="#services"
            onClick={closeMobileMenu}
            className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 py-2 border-b border-gray-100"
          >
            {t('services')}
          </a>
          <a
            href="#apply"
            onClick={closeMobileMenu}
            className="text-gray-600 text-sm font-medium transition-all duration-300 hover:text-orange-300 py-2"
          >
            {t('contact')}
          </a>
        </nav>
      </div>
    </header>
  );
}
